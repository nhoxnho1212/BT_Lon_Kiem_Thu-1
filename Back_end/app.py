from flask import Flask,  flash, request, redirect, url_for
from pymongo import MongoClient
from bson.json_util import dumps
from werkzeug.utils import secure_filename
from face_recognition import load_image_file
from face_recognition import face_encodings
from diem_danh import diem_danh as dd
import os

UPLOAD_FOLDER = 'image/'
ALLOWED_EXTENSIONS = {'jpg', 'jpeg'}
myapp = Flask(__name__)
myapp.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
myapp.testing = True
mongo = MongoClient('localhost', 27017)
db_teacher = mongo.db.teachers
db_classes = mongo.db.classes
db_students = mongo.db.students


@myapp.route('/', methods=['GET'])
def hello_word():
    return dumps({"status":'Welcome to my app'})
@myapp.route('/CheckLoginStudent', methods = ['POST'])
def check_login_student():
    try:
        user = request.form.to_dict()
        username = user['username']
        password = user['password']
        query = {"username": username}
        userDatabase = db_students.find_one(query)
        if(username == userDatabase['username'] and password == userDatabase['password']):
            return dumps({"status": int(1),
                         "data": get_info_sinh_vien(userDatabase['id'],userDatabase['ho_ten'])})
        else:
            return dumps({"status": int(0),
                          "data": int(0)})
    except Exception as e:
        print(e)
        return dumps({"status": int(0),
                      "data":int(0)})
@myapp.route('/CheckLoginTeacher',methods=['POST'])
def check_login_teacher():
    try:
        user = request.form.to_dict()
        username = user['username']
        password = user['password']
        query = {"username": username}
        userDatabase = db_teacher.find_one(query)
        if(username == userDatabase['username'] and password == userDatabase['password']):
            return dumps({"status": int(1),
                          "data": userDatabase['classes']})
        else:
            return dumps({"status": int(0),
                          "data": int(0)})
    except Exception as e:
        print(e)
        return dumps({"status": int(0),
                      "data": int(0)})

@myapp.route('/GetInfoAClass', methods=['POST'])
def get_info_a_class():
    try:
        a_class = request.form.to_dict()
        id = a_class['id']
        query={'id':id}
        classDatabase = db_classes.find_one(query)
        return dumps({"status": int(1),
                      "data": classDatabase['student']})
    except Exception as e:
        print (e)
        return dumps({"status": int(0),
                      "data": int(0)})
@myapp.route('/GetInfoAStudent', methods=['POST'])
def get_a_student():
    try:
        student = request.form.to_dict()
        classId = student['classID']
        studentId = student['studentID']
        query0 = {"id": classId}
        data = db_classes.find_one(query0)
        temp = data['DateCheckin']
        return_ls = []
        for t in temp:
            for student in t['student']:
                if studentId == student['studentID']:
                    new_return = dict()
                    new_return['date'] = t['date']
                    new_return['status'] = student['status']
                    return_ls.append(new_return)
        return dumps({
            'status': int(1),
            'data': return_ls
        })
    except:
        return dumps({'status': int(0),
        'data': int(0)})
# @myapp.route('/GetClassOfStudent', methods=['POST'])
def get_info_sinh_vien(mssv,name):
    try:
        # sinhvien = request.form.to_dict()
        id = mssv
        db = db_classes.find()
        return_ls = []
        name_ls = []
        for clas in db:
            for student in clas['student']:
                if student['id'] == id:
                    return_ls.append((clas['id']))
                    name_ls.append(clas['name'])
                    break
                else:
                    pass
        return_dict = dict()
        return_dict['class'] = return_ls
        return_dict['id'] = id
        return_dict['name'] = name
        return_dict['class_name'] = name_ls
        return return_dict
    except:
        return dict()

@myapp.route('/GetSinhVien', methods=['POST'])
def get_sinh_vien():
    try:
        data = request.form.to_dict()
        id = data['id']
        classes = db_classes.find()
        for clas in classes:
            for student in clas['student']:
                if student['id'] == id:
                    return dumps({"data":student})
                else:
                    return dumps({"data": int(0)})
    except:
        return dumps({"data": int(0)})

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@myapp.route("/diem_danh", methods=["POST"])
def diem_danh():
    try:
        data = request.form.to_dict()
        classId = data["classId"]
        date = data['date']
        if 'image' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['image']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(myapp.config['UPLOAD_FOLDER'], filename.split('.')[-2]+'_upload.jpg'))
            query0 = {"id": classId}
            class_0 = db_classes.find_one(query0)
            students = list(db_students.find())
            input_face = load_image_file(
                os.path.join(myapp.config['UPLOAD_FOLDER'], filename.split('.')[-2] + '_upload.jpg'))
            input_face = face_encodings(input_face, num_jitters = 1)[0]
            for student in students:
                diem_danh = dd(input_face,student['encoded_face'])[0]
                if diem_danh:
                    studentId = student['id']
                    break
            try:
                temp = studentId
            except:
                return dumps({"status": int(0)})
            check_student_query = {"id": classId}
            class_found = db_classes.find_one(check_student_query)
            check_student_in_class = False
            if class_found != None:
                for student in class_found['student']:
                    if studentId == student['id']:
                        check_student_in_class = True
                        break
                else:
                    return dumps({"status": int(check_student_in_class)})
            check_date = False
            if check_student_in_class:
                for i,days in enumerate(class_0['DateCheckin']):
                    if days['date'] == date:
                        check_date = True
                        break
                    else:
                        pass
                if check_date:
                    for i, days in enumerate(class_0['DateCheckin']):
                        if(date == days['date']):
                            for j,student in enumerate(days["student"]):
                                if student['studentID'] == studentId:
                                    query_status = {
                                        "id": classId,
                                    }
                                    newvalues = {"$set": {"DateCheckin."+str(i)+".student."+str(j)+".status": 1}}
                                    db_classes.update_one(query_status, newvalues)
                                    return dumps({"status": int(diem_danh), "data": studentId})
                        else: pass
                else:
                    return dumps({"status": int(check_date)})
            else:
                return dumps({"status": int(0)})
    except Exception as e:
        print(e)
        return dumps({"status": int(0)})
if __name__ == '__main__':
        myapp.run(host='0.0.0.0',debug = True)
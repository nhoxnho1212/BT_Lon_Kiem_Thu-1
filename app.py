from flask import Flask,  flash, request, redirect, url_for
# from flask_pymongo import PyMongo
from pymongo import MongoClient
from bson.json_util import dumps
from werkzeug.utils import secure_filename
from face_recognition import load_image_file
from face_recognition import face_encodings
import numpy as np
from diem_danh import diem_danh as dd
import os

UPLOAD_FOLDER = 'image/'
ALLOWED_EXTENSIONS = {'jpg', 'jpeg'}
app = Flask(__name__)
# dbname = 'sinhvien'
# app.config["MONGO_URI"] = "mongodb://localhost:27017/" + dbname
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
mongo = MongoClient('localhost', 27017)
db_teacher = mongo.db.teachers
db_classes = mongo.db.classes
db_students = mongo.db.students

# db_students.delete_many({})
# minh_face = face_encodings(load_image_file('tuminh.jpg'), num_jitters = 100)[0]
# tung_face = face_encodings(load_image_file('tung.jpg'),num_jitters = 100)[0]
# thien_face = face_encodings(load_image_file('thien.jpg'),num_jitters = 100)[0]
# students = [
#     {
#         "ho_ten": "Duong Tran Tu Minh",
#         "id": "1751010082",
#         "encoded_face" : list(minh_face)
#     },
#     {
#         "ho_ten": "Do Nguyen Thanh Tung",
#         "id": "1751010180",
#         "encoded_face" : list(tung_face)
#     },
#     {
#         "ho_ten": "Nguyen Tran Nhat Thien",
#         "id": "1751012068",
#         "encoded_face" : list(thien_face)
#     }
# ]
# db_students.insert_many(students, ordered= False)
# # len()
@app.route('/', methods=['GET'])
def hello_word():
    return dumps({"status":'Welcome to my app'})
@app.route('/CheckLoginTeacher',methods=['POST'])
def check_login():
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

@app.route('/GetInfoAClass', methods=['POST'])
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
@app.route('/GetInfoAStudent', methods=['POST'])
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

# @app.route('/add_sinhvien', methods=['POST'])
# def add_sinh_vien():
#     try:
#         data = request.form.to_dict()
#         id = data["id"]
#         name = data["name"]
#         birthday = data["birthday"]
#         classID = data["classID"].split(',')
#         if 'file' not in request.files:
#             flash('No file part')
#             return redirect(request.url)
#         file = request.files['file']
#         if file.filename == '':
#             flash('No selected file')
#             return redirect(request.url)
#         if file and allowed_file(file.filename):
#             filename = secure_filename(file.filename)
#             file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename.split('.')[-2]+'_stored.jpeg'))
#             image = load_image_file(os.path.join(app.config['UPLOAD_FOLDER'], filename.split('.')[-2]+'_stored.jpeg'))
#             encoded_face = face_encodings(image, num_jitters=1)[0]
#         query = db_classes.find_one({"id": id})
#         if query:
#                 return dumps({'status': 'sinh vien da co trong he thong'})
#         else:
#             if id and name and birthday:
#                 new_sinhvien = {
#                     "id": id,
#                     "name": name,
#                     "birthday": birthday,
#                     "classID": classID,
#                     "khuon_mat_ma_hoa":  list(encoded_face)}
#                 db_students.insert_one(new_sinhvien)
#             return dumps({'status': bool(True)})
#     except Exception as e:
#         print(e)
#         return dumps({'error': str(e)})
#
# @app.route("/get_all_sinhvien", methods = ['GET'])
# def get_all_sinhvien():
#     try:
#         sinh_vien = db_students.find()
#         a = list(sinh_vien)
#         print(a)
#         return dumps(sinh_vien)
#     except Exception as e:
#         return dumps({'error' : str(e)})
# @app.route("/delete_all", methods = ['DELETE'])
# def delete_all():
#     try:
#         db_students.delete_many({})
#         return dumps({"status": bool(True)})
#     except Exception as e:
#         return dumps({'error': str(e)})
#
# @app.route("/delete_sinhvien", methods = ['DELETE'])
# def delete_sinhvien():
#     try:
#         data = request.form.to_dict()
#         mssv = data["mssv"]
#         query = {"mssv": mssv}
#         a = mongo.db.sinhvien.delete_one(query)
#         if a.deleted_count == 0:
#             return dumps({"status": "sinh vien khong co trong he thong"})
#         return dumps({"status":bool(True)})
#     except Exception as e:
#         return dumps({'error' : str(e)})

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/diem_danh", methods=["POST"])
def diem_danh():
    try:
        data = request.form.to_dict()
        classId = data["classId"]
        studentId = data["studentId"]
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
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename.split('.')[-2]+'_upload.jpg'))
            query0 = {"id": classId}
            class_0 = db_classes.find_one(query0)
            for j,days in enumerate(class_0['DateCheckin']):
                if days['date'] == date:
                    for i,student in enumerate(days["student"]):
                        if student['studentID'] == studentId:
                            input_face = load_image_file(
                                os.path.join(app.config['UPLOAD_FOLDER'], filename.split('.')[-2] + '_upload.jpg'))
                            query = {"id": studentId}
                            sinhvien = db_students.find_one(query)
                            stored_face = np.asarray(sinhvien['encoded_face'])
                            diemdanh = dd(input_face, stored_face)
                            query_status = {
                                "id": classId,
                            }
                            newvalues = {"$set": {"DateCheckin."+str(j)+".student."+str(i)+".status": 1}}
                            db_classes.update_one(query_status, newvalues)
                            return dumps({"status": db_classes.find_one({"id":classId})})
    except Exception as e:
        print(e)
        return dumps({"status": int(0)})
if __name__ == '__main__':
        app.run(host='0.0.0.0',debug = True)
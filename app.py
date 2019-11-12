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
db_checkin = mongo.db.checkin
db_students = mongo.db.students
# db_classes.delete_many({})
# classes = [{
#     "id":"ITECT001",
#     "name":"CO SO DU LIEU",
#     "student": [
#     {
#         "id":"1751010082",
#         "birthday":"14-06-1999",
#         "name":"DUONG TRAN TU MINH"
#     },
#     {
#         "id":"1751010180",
#         "birthday":"14-06-1999",
#         "name":"DO NGUYEN THANH TUNG"
#     },
# {
#         "id":"1751012068",
#         "birthday":"14-06-1999",
#         "name":"NGUYEN TRAN NHAT THIEN"
#     }],
#     "DateCheckin": [
#         {
#             "date": '20-10-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         },
# {
#             "date": '27-10-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         },
# {
#             "date": '3-11-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         },
# {
#             "date": '10-11-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         }
#     ]
#
# },{
#     "id":"ITECT002",
#     "name":"XU LY ANH",
#     "student": [
#     {
#         "id":"1751010082",
#          "birthday":"14-06-1999",
#         "name":"NGUYEN THI TRIEU"
#     },
#     {
#         "id":"1751010180",
#         "birthday":"14-06-1999",
#         "name":"DO NGUYEN THANH TUNG"
#     },
# {
#         "id":"1751012068",
#         "birthday":"14-06-1999",
#         "name":"NGUYEN TRAN NHAT THIEN"
#     }],
#     "DateCheckin": [
#         {
#             "date": '20-10-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         },
# {
#             "date": '27-10-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         },
# {
#             "date": '3-11-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         },
# {
#             "date": '10-11-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         }
#     ]
#
# },
# {
#     "id":"ITECT003",
#     "name":"KIEM THU",
#     "student": [
#     {
#         "id":"1751010082",
#         "birthday":"14-06-1999",
#         "name":"DUONG TRAN TU MINH"
#     },
#     {
#         "id":"1751010180",
#         "birthday":"14-06-1999",
#         "name":"NGUYEN HOANG HUY"
#     },
# {
#         "id":"1751012068",
#         "birthday":"14-06-1999",
#         "name":"NGUYEN TRAN NHAT THIEN"
#     }],
#     "DateCheckin": [
#         {
#             "date": '20-10-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         },
# {
#             "date": '27-10-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         },
# {
#             "date": '3-11-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         },
# {
#             "date": '10-11-2019',
#             "student":[
#                         {
#                             "studentID":"1751010082",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751010180",
#                             "status": 0
#                         },
#                         {
#                             "studentID":"1751012068",
#                             "status": 0
#                         },
# ]
#         }
#     ]
#
# }
# ]
# db_classes.insert_many(classes, ordered= False)
# len()
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

@app.route('/add_sinhvien', methods=['POST'])
def add_sinh_vien():
    try:
        data = request.form.to_dict()
        id = data["id"]
        name = data["name"]
        birthday = data["birthday"]
        classID = data["classID"].split(',')
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename.split('.')[-2]+'_stored.jpeg'))
            image = load_image_file(os.path.join(app.config['UPLOAD_FOLDER'], filename.split('.')[-2]+'_stored.jpeg'))
            encoded_face = face_encodings(image, num_jitters=1)[0]
        query = db_classes.find_one({"id": id})
        if query:
                return dumps({'status': 'sinh vien da co trong he thong'})
        else:
            if id and name and birthday:
                new_sinhvien = {
                    "id": id,
                    "name": name,
                    "birthday": birthday,
                    "classID": classID,
                    "khuon_mat_ma_hoa":  list(encoded_face)}
                db_students.insert_one(new_sinhvien)
            return dumps({'status': bool(True)})
    except Exception as e:
        print(e)
        return dumps({'error': str(e)})

@app.route("/get_all_sinhvien", methods = ['GET'])
def get_all_sinhvien():
    try:
        sinh_vien = db_students.find()
        a = list(sinh_vien)
        print(a)
        return dumps(sinh_vien)
    except Exception as e:
        return dumps({'error' : str(e)})
@app.route("/delete_all", methods = ['DELETE'])
def delete_all():
    try:
        db_students.delete_many({})
        return dumps({"status": bool(True)})
    except Exception as e:
        return dumps({'error': str(e)})

@app.route("/delete_sinhvien", methods = ['DELETE'])
def delete_sinhvien():
    try:
        data = request.form.to_dict()
        mssv = data["mssv"]
        query = {"mssv": mssv}
        a = mongo.db.sinhvien.delete_one(query)
        if a.deleted_count == 0:
            return dumps({"status": "sinh vien khong co trong he thong"})
        return dumps({"status":bool(True)})
    except Exception as e:
        return dumps({'error' : str(e)})

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/diem_danh", methods=["GET"])
def diem_danh():
    try:
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        data = request.form.to_dict()
        mssv = data["mssv"]
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename.split('.')[-2]+'_upload.jpg'))
            query = {"mssv": mssv}
            sinhvien = mongo.db.sinhvien.find_one(query)
            input_face = load_image_file(os.path.join(app.config['UPLOAD_FOLDER'], filename.split('.')[-2]+'_upload.jpg'))
            stored_face = np.asarray(sinhvien['khuon_mat_ma_hoa'])
            diemdanh = dd(input_face,stored_face)
            return dumps({"status": bool(diemdanh[0])})
    except Exception as e:
        return dumps({"status": str(e)})
if __name__ == '__main__':
        app.run(host='0.0.0.0',debug = True)
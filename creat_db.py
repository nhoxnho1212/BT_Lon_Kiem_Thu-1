from pymongo import MongoClient
from bson.json_util import dumps
mongo = MongoClient('localhost', 27017)

db_teacher = mongo.db.teachers
db_classes = mongo.db.classes
db_students = mongo.db.students
"""add teacher"""
teacher = None """copy 'teacher' from data.json and replace None"""
db_teacher.delete_many({})
db_teacher.insert_many(teacher)
classes = None """copy 'classes' from data.json and replace None"""
db_classes.delete_many({})
db_classes.insert_many(classes)
"""add student"""
student = None """copy 'student' from data.json and replace None"""
db_students.delete_many({})
db_students.insert_many(student)


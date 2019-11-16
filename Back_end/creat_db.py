from pymongo import MongoClient
import json
mongo = MongoClient('localhost', 27017)
with open('data/student.json') as json_file:
    student = json.load(json_file)
with open('data/classes.json') as json_file:
    classes = json.load(json_file)
with open('data/teacher.json') as json_file:
    teacher = json.load(json_file)
db_teacher = mongo.db.teachers
db_classes = mongo.db.classes
db_students = mongo.db.students
"""add teacher"""
db_teacher.delete_many({})
db_teacher.insert_many(teacher)
"""add classes"""
db_classes.delete_many({})
db_classes.insert_many(classes)
"""add student"""
db_students.delete_many({})
db_students.insert_many(student)


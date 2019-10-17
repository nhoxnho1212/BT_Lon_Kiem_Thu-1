from Hoc_vien.QuanLyHocVien import QuanLyHocVien
from face_recognition import load_image_file as load
from face_recognition import face_encodings as encode
from Giang_vien.GiangVien import GiangVien
import pandas as pd
import csv
from Lop.Lop import Lop
import numpy as np
# a = pd.read_json('ITEC331.json')
# b = a.values.tolist()
# c = list(np.asarray(b).T)
# print(len(c))

from firebase import Firebase
config = { 
    "apiKey": "AIzaSyBQejwUoqFsWMb1apNj9sg-oqAI83_-kSo",
    "authDomain": "midtermkiemthu.firebaseapp.com",
    "databaseURL": "https://midtermkiemthu.firebaseio.com",
    "projectId": "midtermkiemthu",
    "storageBucket": "midtermkiemthu.appspot.com",
    "messagingSenderId": "56539213888",
    "appId": "1:56539213888:web:eeedd45775ea4901db6fa5",
    "measurementId": "G-VS4TJ07SGQ"
}

firebase = Firebase(config)
dbase = firebase.database()
result = dict(dbase.child('/').get().val())
dbase.child('/').update({'IsChecked': False})
print (result)
from django.contrib.auth.models import User, Group
from rest_framework import serializers




# a = pd.read_csv('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/tuminh.csv')
# print(a.head())
# giangvien = GiangVien('DHT')
# quanly = QuanLyHocVien()
# face_image =load('/home/tuminh14/FE_CREDIT_FINAL/image/Selfie/1570335955390-media.jpg')
# face_encode = encode(face_image, num_jitters=1)[0]
# # # # # print(len(face_image))
# quanly.addHv("1751010082","Duong Tran Tu Minh","14-06-1999",face_encode)
# quanly.addHv("1751010180","Do Nguyen Thanh Tung","14-06-1999",face_encode)
# malop = 'ITEC331'
# d = quanly.traCuu('mssv','1751010082')
# # print(d[0])
# a = Lop(malop, quanly,giangvien,'11-10-2019',10)
# # # # print(b)
# a.class2file('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/tuminh.csv')
# quanly.xemThongTin()
# quanly.xuatDanhSach('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/tuminh.csv')
# a = quanly.loadDanhSach('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/tuminh.csv')
# a.xemThongTin()
# i = 0
# while(True):
#     i = i + 1
#     print("Nhap thong tin sinh vien thu", i)
#     mssv=input("MSSV: ")
#     hoten=input("HO VA TEN: ")
#     ngaysinh=input("Ngay sinh: ")
#     face_image =load('/home/tuminh14/FE_CREDIT_FINAL/image/Selfie/1570335955390-media.jpg')
#     giangvien.giangvien_addHv(mssv,hoten,ngaysinh,face_image)
#     conti = input("Tiep tuc?:")
#     if conti == "y":
#         pass
#     else:
#         break

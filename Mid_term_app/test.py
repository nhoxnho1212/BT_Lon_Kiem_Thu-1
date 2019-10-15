from Hoc_vien.QuanLyHocVien import QuanLyHocVien
from face_recognition import load_image_file as load
from face_recognition import face_encodings as encode
from Giang_vien.GiangVien import GiangVien
import pandas as pd
import csv

# a = pd.read_csv('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/tuminh.csv')
# print(a.head())
# giangvien = GiangVien('Thanh')
quanly = QuanLyHocVien()
face_image =load('/home/tuminh14/FE_CREDIT_FINAL/image/Selfie/1570335955390-media.jpg')
face_encode = encode(face_image, num_jitters=1)[0]
# print(len(face_image))
quanly.addHv("1751010082","Duong Tran Tu Minh","14/06/1999",face_encode)
quanly.addHv("1751010180","Duong Tran iofnafnjan","14/06/1999",face_encode)
quanly.xemThongTin()
quanly.xuatDanhSach('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/tuminh.csv')
a = quanly.loadDanhSach('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/tuminh.csv')
a.xemThongTin()
i = 0
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

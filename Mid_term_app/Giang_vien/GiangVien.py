import face_recognition as fr
import sys
sys.path.append('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/')
from Hoc_vien.QuanLyHocVien import QuanLyHocVien
quanly = QuanLyHocVien()
from Lop.Lop import Lop
class GiangVien:
    __maGiangVien = ''
    __maLop = []
    def __init__(self, maGiangVien):
        self.__maGiangVien = maGiangVien
        self.__maLop = []

    def giangvien_addHv(self,mssv,hoTen,ngaySinh,face_image):
        quanly.addHv(mssv,hoTen,ngaySinh,face_image)
        
    def __chupHinh(self,image):
        list_face_encoded = fr.face_encodings(image, num_jitters = 100)
        return list_face_encoded
    
    def traCuu(self, keywords, check_field):
        out = quanly.traCuu(check_field,keywords)
        j = 0
        for i in out:
            print("Sinh vien thu", j+1,"\n ---------------------------\n")
            print("Ho ten:", i.get_hoTen,"\n")
            print("MSSV:",i.get_mssv,"\n")
            print("Ngay sinh:",i.get_ngaySinh,"\n")
    def diemDanh(self):
        pass

    def them_maLop(self, maLop):
        if maLop in self.__maLop:
            print('Ma lop da ton tai')
        else:
            self.__maLop.append(maLop)
    
    def delete_maLop(self,maLop):
        if(maLop.upper() in self.__maLop):
            self.__maLop.remove(maLop)
        else:
            print('Ma lop nhap sai vui long nhap lai!')
    
    def get_maGiangVien(self):
        return self.__maGiangVien
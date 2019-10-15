import sys
sys.path.append('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/')
from Hoc_vien import HocVien 
import pandas as pd
from Hoc_vien import QuanLyHocVien
import numpy as np
class QuanLyHocVien:
    __danhSachHocVien = None

    def __init__(self):
        self.__danhSachHocVien = []


    def addHv(self,mssv,hoTen,ngaySinh,face_image):
        flag = True
        for hocvien in self.__danhSachHocVien:
            if mssv == hocvien.get_mssv():
                print('Sinh vien da ton tai')
                flag = False
                break
            else:
                pass
        if flag == True:
            hocVien = HocVien.HocVien(mssv,hoTen,ngaySinh,face_image)
            self.__danhSachHocVien.append(hocVien)


    def traCuu(self,field,keywords):
        list_tracuu = list()
        if field == "mssv":
            for hocvien in self.__danhSachHocVien:
                if(hocvien.get_mssv() == keywords):
                    list_tracuu.append(hocvien)
                    return list_tracuu         
        elif field == "hoten":
            for hocvien in self.__danhSachHocVien:
                if(hocvien.get_hoTen() == keywords):
                    list_tracuu.append(hocvien)
                    return list_tracuu
        elif field == "ngaysinh":
            for hocvien in self.__danhSachHocVien:
                if(hocvien.get_ngaySinh() == keywords):
                    list_tracuu.append(hocvien)
                    return list_tracuu
    
    def xemThongTin(self):
        i = 0
        for hocvien in self.__danhSachHocVien:
            i = i + 1
            print("Sinh vien thu", i,"\n---------------------\n")
            print("Ho va ten: ", hocvien.get_hoTen(), "\n")
            print("MSSV: ", hocvien.get_mssv(), "\n")
            print("Ngay sinh", hocvien.get_ngaySinh(),"\n")

    def xuatDanhSach(self,path):
        ds = dict()
        ds_list = list()
        ds_list.append(['Ho ten','MSSV','Ngay Sinh','Face'])
        i = 0
        for hocvien in self.__danhSachHocVien:
            sub_list = []
            sub_list.append(hocvien.get_hoTen())
            sub_list.append(hocvien.get_mssv())
            sub_list.append(hocvien.get_ngaySinh())
            for j in (hocvien.get_khuonMat()):
                sub_list.append(j)
            ds_list.append(sub_list)
            sub_ds = dict()
            sub_ds['Ho ten'] = hocvien.get_hoTen()
            sub_ds['MSSV'] = hocvien.get_mssv()
            sub_ds['Ngay sinh'] = hocvien.get_ngaySinh()
            sub_ds['Khuon mat ma hoa'] = hocvien.get_khuonMat()
            ds['Hoc vien' + str(i)] = sub_ds
            i = i + 1
        ds_json = pd.DataFrame(ds)
        ds_csv = pd.DataFrame(ds_list)
        ds_csv.to_csv(path, index = False, header =False)
        sub = path.split('.')
        ds_json.to_json(sub[0]+".json",orient = 'columns' )
    
    def loadDanhSach(self,path):
        i = 0
        if(path.split('.')[1] == 'json'):
            ds_csv = pd.read_json(path)
        else:
            ds_csv = pd.read_csv(path)
        ds = ds_csv.values.tolist()
        ds_ls = QuanLyHocVien()
        for hocvien in ds:
            ls = []
            hoten = hocvien[0]
            mssv = hocvien[1]
            ngaysinh = hocvien[2]
            for j in range (3,len(hocvien)):
                ls.append(float(hocvien[j]))
            khuonmat = np.asarray(ls)
            ds_ls.addHv(mssv,hoten,ngaysinh,khuonmat)
        return ds_ls
        
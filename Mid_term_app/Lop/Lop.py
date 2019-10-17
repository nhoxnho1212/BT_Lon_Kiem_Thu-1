import numpy as np
import sys
import pandas as pd
import datetime
import json
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
sys.path.append('/media/tuminh14/New Volume/Mid_term_env/Mid_term_app/')

class Lop():
    __maLop = ''
    __siSo = 0
    __danhSachLop = []
    __giangVien = ''
    __cacBuoiHoc = []
    __ketThuc = False

    def __init__(self,maLop,danhSach,giangvien,startDay, numofday):
        self.__maLop = maLop
        self.__danhSachLop = danhSach.get_danhSach()
        self.__siSo = len(self.__danhSachLop)
        self.__giangVien = giangvien.get_maGiangVien()
        self.__cacBuoiHoc = self.__generateClassDay(startDay,numofday)
    
    def class2file(self,path):
        ds = dict()
        ds_tolocal = dict()
        ds_list = list()
        ds_list.append(['Ho ten','MSSV','Ngay Sinh'])
        for i in self.__cacBuoiHoc:
            ds_list[0].append(i)
        k = 0
        for hocvien in self.__danhSachLop:
            sub_list = []
            sub_list.append(hocvien.get_hoTen())
            sub_list.append(hocvien.get_mssv())
            sub_list.append(hocvien.get_ngaySinh())
            for j in range(3,len(self.__cacBuoiHoc)+3):
                sub_list.append('')
            ds_list.append(sub_list)
            sub_ds = dict()
            sub_ds['Hoten'] = hocvien.get_hoTen()
            sub_ds['MSSV'] = hocvien.get_mssv()
            sub_ds['Ngaysinh'] = hocvien.get_ngaySinh()
            for i in self.__cacBuoiHoc:
                sub_ds[i] = ''
            ds['Hocvien' + str(k)] = sub_ds
            ds_tolocal['Hocvien' + str(k)] = sub_ds
            k = k + 1
        ds['IsChecked'] = False
        file_name_csv = self.__maLop + '.csv'
        file_name_json = self.__maLop + '.json'
        path_csv = file_name_csv
        path_json = file_name_json
        path_json_tolocal =  self.__maLop + '_local.json'
        ds_json = pd.DataFrame(ds_tolocal)
        ds_csv = pd.DataFrame(ds_list)
        ds_csv.to_csv(path_csv, index = False, header =False)
        with open(path_json ,'w') as json_file:
            json.dump(ds, json_file)
        ds_json.to_json(path_json_tolocal)
    def __generateClassDay(self,day_start,numofday):
        list_of_day = [day_start]
        for i in range (1,numofday):
            a = datetime.datetime.strptime(day_start, '%d-%m-%Y')
            day_start = a + datetime.timedelta(days=7)
            day_start = day_start.strftime('%d-%m-%Y')
            list_of_day.append(day_start)
        return list_of_day
    # def diemDanh(self)
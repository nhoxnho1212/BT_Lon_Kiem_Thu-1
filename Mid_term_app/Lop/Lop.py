import numpy as np
import sys
import pandas as pd
import datetime
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
        self.__cacBuoiHoc = self.generateClassDay(startDay,numofday)
    
    def class2file(self,path):
        ds = dict()
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
            sub_ds['Ho ten'] = hocvien.get_hoTen()
            sub_ds['MSSV'] = hocvien.get_mssv()
            sub_ds['Ngay sinh'] = hocvien.get_ngaySinh()
            for i in self.__cacBuoiHoc:
                sub_ds[i] = ''
            ds['Hoc vien ' + str(k)] = sub_ds
            k = k + 1
        sub_path = path.split('/')
        file_name_csv = self.__maLop + '.csv'
        file_name_json = self.__maLop + '.json'
        path_csv = file_name_csv
        path_json = file_name_json
        ds_json = pd.DataFrame(ds)
        ds_csv = pd.DataFrame(ds_list)
        ds_csv.to_csv(path_csv, index = False, header =False)
        sub = path.split('.')
        ds_json.to_json(path_json,orient = 'columns' )
    
    def generateClassDay(self,day_start,numofday):
        list_of_day = [day_start]
        for i in range (1,numofday):
            a = datetime.datetime.strptime(day_start, '%d/%m/%Y')
            day_start = a + datetime.timedelta(days=7)
            day_start = day_start.strftime('%d/%m/%Y')
            list_of_day.append(day_start)
        return list_of_day

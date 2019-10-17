from face_recognition import face_encodings as encode
class HocVien:
    __mssv = ""
    __hoTen = ""
    __ngaySinh = ""
    __khuonMat = None
    def __init__(self, mssv, hoTen, ngaySinh, face_image):
        self.__mssv = mssv
        self.__hoTen = hoTen
        self.__ngaySinh = ngaySinh
        if(len(face_image) == 128):
            self.__khuonMat = face_image
        else:
            self.__khuonMat = encode(face_image, num_jitters = 100)[0]
    def get_mssv(self):
        return self.__mssv
    def get_hoTen(self):
        return self.__hoTen
    def get_ngaySinh(self):
        return self.__ngaySinh
    def get_khuonMat(self):
        return self.__khuonMat
    def __str__(self):
        hocvien = 'Ho ten: ' + self.__hoTen + '\n'
        hocvien += 'MSSV: ' + self.__mssv + '\n'
        hocvien += 'Ngay sinh: ' + self.__ngaySinh + '\n'
        return hocvien
from numpy import asarray as np
from face_recognition import compare_faces
from face_recognition import face_encodings
from face_recognition import load_image_file
import diem_danh
def diem_danh(input_face, stored_face):
    try:
        input_face_encode = face_encodings(input_face,num_jitters=1)[0]
        return compare_faces([stored_face], input_face_encode)
    except:
        return None

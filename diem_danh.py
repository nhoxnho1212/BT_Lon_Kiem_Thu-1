from face_recognition import compare_faces

def diem_danh(input_face, stored_face):
    try:
        input_face_encode = input_face
        return compare_faces([stored_face], input_face_encode, tolerance=0.5)
    except:
        return None

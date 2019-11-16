import unittest
from app import myapp
import json


class MyTestCase(unittest.TestCase):
    def setUp(self):
        self.app = myapp.test_client()
    def test_check_login(self):
        response = self.app.post('/CheckLoginTeacher',
                                 data = {"username":"tung",'password':'tung'})
        data = json.loads(response.data)
        self.assertEqual(data['status'],1)

    def test_check_student(self):
        response = self.app.post('/CheckLoginStudent',
                                 data = {"username":"tung",'password':'tung'})
        data = json.loads(response.data)
        self.assertEqual(data['status'],1)

if __name__ == '__main__':
    unittest.main()

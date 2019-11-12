from pymongo import MongoClient
mongo = MongoClient('localhost', 27017)
db_test = mongo.db.teachers
teachers = [{
    "id":"ITEC001",
    "name":"CO SO DU LIEU",
    "student:": [
    {
        "id":"1751010082",
        "name":"DUONG TRAN TU MINH"
    },
    {
        "id":"1751010180",
        "name":"DO NGUYEN THANH TUNG"
    },
{
        "id":"1751012068",
        "name":"NGUYEN TRAN NHAT THIEN"
    }]

},{
    "id":"ITEC002",
    "name":"CO SO DU LIEU",
    "student:": [
    {
        "id":"1751010082",
        "name":"DUONG TRAN TU MINH"
    },
    {
        "id":"1751010180",
        "name":"DO NGUYEN THANH TUNG"
    },
{
        "id":"1751012068",
        "name":"NGUYEN TRAN NHAT THIEN"
    }]

},
{
    "id":"ITEC003",
    "name":"CO SO DU LIEU",
    "student:": [
    {
        "id":"1751010082",
        "name":"DUONG TRAN TU MINH"
    },
    {
        "id":"1751010180",
        "name":"DO NGUYEN THANH TUNG"
    },
{
        "id":"1751012068",
        "name":"NGUYEN TRAN NHAT THIEN"
    }]

}
]
db_test.insert_many(teachers, ordered=False)
query = {'username':"tung"}
userDatabase = len(list(db_test.find(query)))
print(userDatabase)
from pymongo import MongoClient

mongo = MongoClient('localhost', 27017)
db_test = mongo.db.test
db_test.delete_many({})
test = [{
    "id":"ITECT001",
    "name":"CO SO DU LIEU",
    "student": [
    {
        "id":"1751010082",
        "birthday":"14-06-1999",
        "name":"DUONG TRAN TU MINH"
    },
    {
        "id":"1751010180",
        "birthday":"14-06-1999",
        "name":"DO NGUYEN THANH TUNG"
    },
{
        "id":"1751012068",
        "birthday":"14-06-1999",
        "name":"NGUYEN TRAN NHAT THIEN"
    }],
    "DateCheckin": [
        {
            "date": '20-10-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {:"1751010180",
                            "status
                            "studentID"": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        },
{
            "date": '27-10-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        },
{
            "date": '3-11-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        },
{
            "date": '10-11-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        }
    ]

},{
    "id":"ITECT002",
    "name":"XU LY ANH",
    "student": [
    {
        "id":"1751010082",
         "birthday":"14-06-1999",
        "name":"NGUYEN THI TRIEU"
    },
    {
        "id":"1751010180",
        "birthday":"14-06-1999",
        "name":"DO NGUYEN THANH TUNG"
    },
{
        "id":"1751012068",
        "birthday":"14-06-1999",
        "name":"NGUYEN TRAN NHAT THIEN"
    }],
    "DateCheckin": [
        {
            "date": '20-10-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        },
{
            "date": '27-10-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        },
{
            "date": '3-11-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        },
{
            "date": '10-11-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        }
    ]

},
{
    "id":"ITECT003",
    "name":"KIEM THU",
    "student": [
    {
        "id":"1751010082",
        "birthday":"14-06-1999",
        "name":"DUONG TRAN TU MINH"
    },
    {
        "id":"1751010180",
        "birthday":"14-06-1999",
        "name":"NGUYEN HOANG HUY"
    },
{
        "id":"1751012068",
        "birthday":"14-06-1999",
        "name":"NGUYEN TRAN NHAT THIEN"
    }],
    "DateCheckin": [
        {
            "date": '20-10-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        },
{
            "date": '27-10-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        },
{
            "date": '3-11-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        },
{
            "date": '10-11-2019',
            "student":[
                        {
                            "studentID":"1751010082",
                            "status": 0
                        },
                        {
                            "studentID":"1751010180",
                            "status": 0
                        },
                        {
                            "studentID":"1751012068",
                            "status": 0
                        },
]
        }
    ]

}
]
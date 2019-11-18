import React, { Component } from 'react';
import { formData } from 'react-native'
const api = 'http://10.5.50.81:5000';

const apiCheckLoginTeacher = api + '/CheckLoginTeacher';
const apiGetInfoAClass = api + '/GetInfoAClass';
const apiGetInfoAStudent = api + '/GetInfoAStudent';
const apiCheckin = api + '/diem_danh';

async function CheckLoginTeacherFromServer(username, password) {
    let responseFromServer = {
        isloading: true,
        status: -1,
        data: [],
    }
    let formData = new FormData()
    formData.append('username', username);
    formData.append('password', password);
    await fetch(apiCheckLoginTeacher, {
        method: 'POST',
        headers: {
            'content-Type': 'multipart/form-data',
        },
        body: formData
    })
        .then((response) => response.json())
        .then((responseJson) => {
            responseFromServer.status = responseJson.status;
            responseFromServer.data = responseJson.data;
            return responseFromServer;
        })
        .catch((error) => {
            console.log(error);
            return responseFromServer;
        });
    return responseFromServer;
}

async function GetInfoClass(id) {
    let responseFromServer = {
        status: -1,
        data: [],
    }
    let formData = new FormData()
    formData.append('id', id);

    await fetch(apiGetInfoAClass, {
        method: 'POST',
        headers: {
            'content-Type': 'multipart/form-data',
        },
        body: formData
    })
        .then((response) => response.json())
        .then((responseJson) => {
            responseFromServer.status = responseJson.status;
            responseFromServer.data = responseJson.data;
            return responseFromServer;
        })
        .catch((error) => {
            console.log(error);
            return responseFromServer;
        });
    return responseFromServer;
}

async function GetInfoAStudent(ClassID, StudentID) {
    let responseFromServer = {
        status: -1,
        data: [],
    }
    let formData = new FormData()
    formData.append('classID', ClassID);
    formData.append('studentID', StudentID);

    await fetch(apiGetInfoAStudent, {
        method: 'POST',
        headers: {
            'content-Type': 'multipart/form-data',
        },
        body: formData
    })
        .then((response) => response.json())
        .then((responseJson) => {
            responseFromServer.status = responseJson.status;
            responseFromServer.data = responseJson.data;
            return responseFromServer;
        })
        .catch((error) => {
            console.log(error);
            return responseFromServer;
        });
    return responseFromServer;
}
async function Checkin(ClassID, image, date) {
    let responseFromServer = {
        status: -1,
        data: [],
    }
    let formData = new FormData()
    await formData.append('classId', ClassID);

    let localUri = image.uri;
    let filename = localUri.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    await formData.append('image', { uri: localUri, name: filename, type });
    await formData.append('date', date);
    await fetch(apiCheckin, {
        method: 'POST',
        headers: {
            'content-Type': 'multipart/form-data',
        },
        body: formData
    })
        .then((response) => response.json())
        .then((responseJson) => {
            responseFromServer.status = responseJson.status;
            responseFromServer.data = responseJson.data;
            return responseFromServer;
        })
        .catch((error) => {
            console.log(error);
            return responseFromServer;
        });
    return responseFromServer;
}





export { GetInfoAStudent };
export { CheckLoginTeacherFromServer };
export { GetInfoClass };
export { Checkin };
import React, { Component } from 'react';
import { formData} from 'react-native'
const api = 'http://10.246.129.180:5000';

const apiCheckLoginTeacher = api+'/CheckLoginTeacher';
const apiGetInfoAClass =api+'/GetInfoAClass';
const apiGetInfoAStudent = api+'/GetInfoAStudent';

async function CheckLoginTeacherFromServer(username, password) {
    let responseFromServer = {
        isloading:true,
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
        .then((responseJson)=> {
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
        .then((responseJson)=> {
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
async function GetInfoAStudent(ClassID,StudentID) {
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
        .then((responseJson)=> {
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



export {GetInfoAStudent};
export {CheckLoginTeacherFromServer};
export {GetInfoClass};

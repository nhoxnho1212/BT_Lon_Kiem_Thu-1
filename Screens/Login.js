import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert} from 'react-native';
import ChooseLogin from './chooseTypeLogin';

//connect firebase
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import { database } from 'firebase/database';


//config firebase
const config = {
    apiKey: "AIzaSyD38d0u1HW2Q0yZCtYf_YxRwyU_oW3lddE",
    //   authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "https://appcheckinwithfacerecognition.firebaseio.com",
    projectId: "appcheckinwithfacerecognition",
    storageBucket: "appcheckinwithfacerecognition.appspot.com",
    messagingSenderId: "514119668858"
};
firebase.initializeApp(config);

// -------------------------------------------------



class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        header: null,
        left: null,
        gesturesEnabled: false,
    };
    countTime = 0;
    pathDB = '';
    component = this;
    
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            Data: [],
            isTeacher: false,
            
        };
        if (ChooseLogin.GetIsTeacher() == true) {
            this.pathDB = 'Users/Teachers/';
        }
        else {
            this.pathDB = 'Users/Students/';
        }

        this.LoadFireBase();
        this.LoadFireBase();
    }
    ObjectToArr(Obj) {
        const result = Object.keys(Obj).map(key => ({ [key]: Obj[key] }));
        return result;
    }

    static isValidAccount = false;
    checkUser(UserName, Password) {
        // async () => {
            try {
                //load data
                // if (this.state.Data.length == 0) {
                //     this.loadDataFromLocalStorage();
                // }
                let isCheckAcc = false;
                
                this.ObjectToArr(this.state.Data).map((item, key) => {
                    if ((UserName == item[key].userName) && (Password == item[key].password)) {
                        isCheckAcc = true;
                    } else {

                    }
                    

                });
                this.isValidAccount = isCheckAcc

                if (isCheckAcc == false) {

                    Alert.alert('', 'sai tên đăng nhập hoặc mật khẩu!');
                }

            }
            catch {
                
                Alert.alert('', 'load Data fail!');
            }
        // }
    }

    LoadFireBase() {
        var connectedRef = firebase.database().ref(".info/connected");
            connectedRef.on("value", function (snap) {
                if (snap.val() === true) {
                    console.log("connected");
                    firebase.database().ref(this.pathDB).once('value', function (snapshot) {
                        this.setState({ Data: snapshot.toJSON() });
                    }.bind(this)).then(() => {
                        this.countTime += 1;
                        console.log('GETTED ' + this.pathDB + ' ! ' + this.countTime);

                    }).catch((error) => {
                        console.log(error.message);

                    });

                } else {
                    // alert("not connected");
                    console.log("not connected");

                }
            }.bind(this));

    }

    ReadDatabase() {
        GetDataUserFormFB = setTimeout(function () {
            this.LoadFireBase();
        }.bind(this), 1000 * 60*5) //set time to load database from firebase:  1 minutes

    }

    onPress = () => {

        this.checkUser(this.state.userName, this.state.password);

        if (this.isValidAccount) {
            clearTimeout(GetDataUserFormFB);
            return (this.props.navigation.navigate('HomeTeacher'));
        } else {
            return {};
        }
    }


    render() {

        const styles = StyleSheet.create({
            container: {
                width: '100%',
                height: '100%',
                backgroundColor: '#E5E6E7',

            },
            rectangle2: {
                position: 'absolute',
                width: '100%',
                height: null,
                left: '0%',
                right: '0%',
                top: '32.89%',
                bottom: '0%',
            },
            rectangle1: {
                position: 'absolute',
                width: '100%',
                height: null,
                top: '25.78%',
                left: '0%',
                right: '0%',
                bottom: '0%',
            },
            textTenDangNhap: {
                position: 'absolute',
                left: '17.78%',
                // right: '57.22%',
                top: '52.66%',
                bottom: '44.84%',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 16,
                textAlign: 'center',

                color: '#F5EBEB',
            },
            textMatKhau: {
                position: 'absolute',
                left: '17.78%',
                // right: 65.83%;
                top: '65%',
                bottom: '32.5%',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 16,
                textAlign: 'center',

                color: '#F5EBEB',
            },

            inputTenDangNhap: {
                position: 'absolute',
                left: '17.78%',
                right: '14.44%',
                top: '56.56%',
                bottom: '38.28%',
                borderColor: '#D7D7D7',
                borderWidth: 1,
                paddingLeft: 10,
                color: '#FFF'
            },
            inputMatKhau: {
                position: 'absolute',
                left: '17.78%',
                right: '14.44%',
                top: '68.91%',
                bottom: '25.94%',
                borderColor: '#D7D7D7',
                borderWidth: 1,
                paddingLeft: 10,
                color: '#FFF'
            },
            btnDangNhap: {
                position: 'absolute',
                width: null,
                height: null,
                left: '55.28%',
                right: '14.17%',
                top: '79.53%',
                bottom: '14.84%',
            },
            absoluteViewBtnDangNhap: {
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '80%',
                alignItems: 'center',
                justifyContent: 'center',

                // left: '33.33%',
                // right: '35%',
                // top: "60.78%",
                // bottom: '34.84%',
            },
            TextDangNhap: {
                fontFamily: 'Roboto',
                fontSize: 18,
                fontStyle: 'normal',
                color: '#488DF5',
                textAlign: "center",
                lineHeight: 21,
                fontWeight: 'bold',
            },
            btnTroVe: {
                position: 'absolute',
                width: null,
                height: null,
                left: '16.94%',
                right: '52.5%',
                top: '79.53%',
                bottom: '14.84%',
            },
            absoluteViewBtnTroVe: {
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '80%',
                alignItems: 'center',
                justifyContent: 'center',

                // left: '33.33%',
                // right: '35%',
                // top: "60.78%",
                // bottom: '34.84%',
            },
            TextTroVe: {
                fontFamily: 'Roboto',
                fontSize: 18,
                fontStyle: 'normal',
                color: '#EFE4E4',
                textAlign: "center",
                lineHeight: 21,
                fontWeight: 'bold',
            }
        });
        this.ReadDatabase();
        return (
            <KeyboardAvoidingView behavior='position' >
                <View style={styles.container}>
                    <Image source={require('./image/Rectangle1.png')} style={styles.rectangle1} />
                    <Image source={require('./image/Rectangle2.png')} style={styles.rectangle2} />

                    <Text style={styles.textTenDangNhap}>Tên đăng nhập:</Text>
                    <TextInput
                        placeholder='nhập tên đăng nhập'
                        placeholderTextColor='#C9BDBD'
                        onChangeText={(User) => { this.setState({ userName: User }) }}
                        returnKeyType='next'

                        autoCapitalize='none'
                        style={styles.inputTenDangNhap}
                    />

                    <Text style={styles.textMatKhau}>Mật khẩu:</Text>
                    <TextInput
                        placeholder='Nhập mật khẩu'
                        placeholderTextColor='#C9BDBD'
                        onChangeText={(Pass) => { this.setState({ password: Pass }) }}
                        returnKeyType='go'
                        autoCapitalize='none'
                        secureTextEntry
                        style={styles.inputMatKhau}
                    />

                    <TouchableOpacity onPress={this.onPress} style={styles.btnDangNhap}>
                        <Image source={require('./image/buttonDangNhap.png')} />
                        <View style={styles.absoluteViewBtnDangNhap}>
                            <Text style={styles.TextDangNhap}>Đăng nhập</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        clearTimeout(GetDataUserFormFB);
                        this.props.navigation.goBack();
                    }}
                        style={styles.btnTroVe}
                    >
                        <Image source={require('./image/buttonTroVe.png')} />
                        <View style={styles.absoluteViewBtnTroVe}>
                            <Text style={styles.TextTroVe}>Trở về</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}



export default Login;



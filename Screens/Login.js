import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert,ActivityIndicator } from 'react-native';
import ChooseLogin from './chooseTypeLogin';
import { CheckLoginTeacherFromServer } from '../Networking/Server'

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        header: null,
        left: null,
        gesturesEnabled: false,
        isLoading:false,
    };
    countTime = 0;
    pathDB = '';
    component = this;

    constructor(props) {
        super(props);
        global.Classes=[];
        this.state = {
            userName: '',
            password: '',
            Data: [],
            isTeacher: ChooseLogin.GetIsTeacher(),

        };
        if (ChooseLogin.GetIsTeacher() == true) {
            this.pathDB = 'Users/Teachers/';
        }
        else {
            this.pathDB = 'Users/Students/';
        }

    }
    static GetClasses() {
        return global.Classes;
    }

    onPress = async () => {
        this.setState({isLoading:true});
        let checkValidAccout = await CheckLoginTeacherFromServer(this.state.userName, this.state.password)
        this.setState({isLoading:false});
        if (checkValidAccout.status == 1) {
            if (this.state.isTeacher) {
                global.Classes=checkValidAccout.data;
                return (this.props.navigation.navigate('HomeTeacher'));
            }
            else {
                return this.props.navigation.navigate('HomeStudent');
            }
        } else {
            if (checkValidAccout.status == 0) {
                Alert.alert('', 'Sai tên đặng nhập hoặc mật khẩu');
            }
            if (checkValidAccout.status == -1) {
                Alert.alert('', 'Không thể kết nối với máy chủ');
            }
            return {};
        }



    }


    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, justifyContent:'center'}}>
                <ActivityIndicator/>
              </View>
            )
          }
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



import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';

class HomeTeacher extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            AvatarDefault: './image/userAvatar.png'
        }
    }


    render() {
        const styles = StyleSheet.create({
            container: {
                width: '100%',
                height: '100%',
                backgroundColor: '#E5E6E7',
            },
            header: {
                position: 'absolute',
                left: '0%',
                right: '0%',
                top: '0%',
                bottom: '90.47%',
                width: '100%',
                height: 61,
            },
            buttonUser: {
                position: 'absolute',
                height: 38,
                left: '78.06%',
                right: '5%',
                top: 10,
                // backgroundColor: '#000000',
            },
            userAvatar: {
                position: 'absolute',
                height: 38,
                width: 38,
            },
            PolygonShowButton: {
                position: 'absolute',
                height: 8,
                right: 0,
                top: 15,
            },
            buttonQuanLyLopHoc: {
                position: 'absolute',
                left: '11.11%',
                right: '11.39%',
                top: '37.97%',
                bottom: '53.75%',
            },
            absoluteViewBtnThongKe: {
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
            },
            buttonThongKe: {
                position: 'absolute',
                left: '11.11%',
                right: '11.39%',
                top: '45.78%',
                bottom: '45.94%',
            },
            TextQuanLyMonHoc: {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 18,
                lineHeight: 21,
                textAlign: 'center',
                color: '#FEF6F5',
                display: 'flex',

            },

            backIconExit: {
                position: 'absolute',
                left: '5%',
                height: 38,
                width: 38,
                top: 10,
            },
            imgBackIconExit: {
                position: 'absolute',
                height: 30,
                width: 30,
            },
            btnExit: {
                position: 'absolute',
                width: 203,
                height: 61,
                right: 0,
                top: 61,
            },
            absoluteBtnExit: {
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',

            },
            TextExit: {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 18,
                lineHeight: 21,
                // textAlign: 'center',
                left: '50%',
                color: '#488DF5',
                display: 'flex',

            },
            btnIconExit: {
                position: 'absolute',
                // width: 22,
                // height: 24,
                left: '25%',
                top: '32%',
            },

            //Style background
            backGround: {
                // position: 'absolute',
                // left: '0%',
                // right: '0%',
                // top: '0%',
                // bottom: '10%',
                width: '100%',
                height: '100%',
                top: 61,
            },
        })
        return (

            <View style={styles.container}>

                <StatusBar hidden />
                <Image source={require('./image/header.png')} style={styles.header} />

                <TouchableOpacity style={styles.buttonUser} >
                    <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.backIconExit} >
                    <Image source={require('./image/backIconExit.png')} style={styles.imgBackIconExit} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./image/bgExit.png')} style = {styles.backGround} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnExit}>
                    <Image source={require('./image/btnExit.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    <View style={styles.absoluteBtnExit}>
                        <Text style={styles.TextExit}>Thoát</Text>
                        <Image source={require('./image/iconExit.png')} style = {styles.btnIconExit} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuanLyLopHoc}>
                    <Image source={require('./image/buttonQuanLyLopHoc.png')} style={{ height: '100%', width: '100%',resizeMode:'contain'}} />
                    <View style={styles.absoluteViewBtnThongKe}>
                        <Text style={styles.TextQuanLyMonHoc}>Quản lý môn học</Text>
                    </View>
                </TouchableOpacity>


            </View>
        );
    }
}



export default HomeTeacher; 
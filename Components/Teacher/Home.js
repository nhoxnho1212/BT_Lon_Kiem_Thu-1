import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        header: null
    };
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigation.toggleDrawer();
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
            buttonThongKe: {
                position: 'absolute',
                left: '11.11%',
                right: '11.39%',
                top: '53.75%',
                bottom: '37.97%',
            },
            absoluteViewBtnThongKe: {
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
            },
            TextThongKe: {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 18,
                lineHeight: 21,
                textAlign: 'center',
                color: '#488DF5',
                display: 'flex',

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
        })
        return (
            
            <View style={styles.container}>

                <StatusBar hidden />
                <Image source={require('./image/header.png')} style={styles.header} />

                <TouchableOpacity style={styles.buttonUser} onPress={this.toggleDrawer} >
                    <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuanLyLopHoc}>
                    <Image source={require('./image/buttonQuanLyLopHoc.png')} style={{ height: '100%', width: '100%',resizeMode:'contain'}} />
                    <View style={styles.absoluteViewBtnThongKe}>
                        <Text style={styles.TextQuanLyMonHoc}>Quản lý môn học</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonThongKe}>
                    <Image source={require('./image/buttonThongKe.png')} style={{ height: '100%', width: '100%' ,resizeMode:'contain'}} />
                    <View style={styles.absoluteViewBtnThongKe}>
                        <Text style={styles.TextThongKe}>Thống kê</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}



export default Home;
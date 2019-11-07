import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Button } from 'react-native';
import React, { Component, useState } from 'react';
import HomeTeacher from '../../Screens/HomeTeacher';

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
            // AvatarDefault: './image/userAvatar.png'
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
            ButtonGoBack: {
                position: 'absolute',
                left: '4.17%',
                right: '86.11%',
                top: '2.81%',
                bottom: '93.59%',
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
            ButtonDanhSachSinhVien: {
                position: 'absolute',
                left: '11.11%',
                right: '11.39%',
                top: '37.97%',
                bottom: '53.75%',

                flex: 1,

                borderRadius: 12,
                backgroundColor: '#FBF3F3',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowOpacity: 0.1,
                elevation: 6,
                shadowRadius: 15,
                shadowOffset: { width: 1, height: 13 },
                justifyContent: 'center',
            },
            ButtonDiemDanh: {
                position: 'absolute',
                left: '11.11%',
                right: '11.39%',
                top: '53.75%',
                bottom: '37.97%',

                flex: 1,

                borderRadius: 12,
                backgroundColor: '#FBF3F3',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowOpacity: 0.1,
                elevation: 6,
                shadowRadius: 15,
                shadowOffset: { width: 1, height: 13 },
                justifyContent: 'center',
            },

            ButtonComponent_Text: {
                position: 'absolute',
                width: '100%',
                // height: '100%',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 18,
                lineHeight: 21,
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                // backgroundColor:'#f00',
                color: '#488DF5',

            }

        })

        return (

            <View style={styles.container}>

                <StatusBar hidden />
                <Image source={require('./image/header.png')} style={styles.header} />
                <TouchableOpacity style={styles.ButtonGoBack} onPress={()=>{this.props.navigation.navigate('ClassManager')}}>
                    <Image source={require('./image/backIcon.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUser} onPress={this.toggleDrawer} >
                    <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonDanhSachSinhVien} onPress={()=>{this.props.navigation.navigate('StudentListView')}}>
                    <Text style={styles.ButtonComponent_Text} >danh sách sinh viên</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonDiemDanh}>
                    <Text style={styles.ButtonComponent_Text} >điểm danh</Text>
                </TouchableOpacity>

            </View>
        );
    }
}



export default Home;
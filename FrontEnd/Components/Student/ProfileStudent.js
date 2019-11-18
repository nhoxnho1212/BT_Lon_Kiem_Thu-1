import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import eduIcon from './image/eduIcon.png'
import { FlatList } from 'react-native-gesture-handler';

import Login from '../../Screens/Login'
import { GetInfoAStudent } from '../../Networking/Server';
// import { GetInfoStudent } from '../../Networking/Server';

//Tester
import { GetInfoClass } from '../../Networking/Server';

class HomeProfileStudent extends Component {
    // static navigationOptions = {
    //     header: null
    // };

    // toggleDrawer = () => {
    //     //Props to open/close the drawer
    //     this.props.navigation.toggleDrawer();
    //   };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         AvatarDefault: './image/userAvatar.png',
    //     }
    // }

    //Tester
    static navigationOptions = {
        header: null,
    };
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigation.toggleDrawer();
    };
    constructor(props) {
        super(props);
        global.AClass = [];
        global.ClassID = '';
        this.state = {
            // AvatarDefault: './image/userAvatar.png',
            isLoading: false,
            LoginClass: Login.GetInfoStudent().class,
        }
        global.infoAStudentCheckin = [];
    }

    static GetInfoAStudentCheckin = () => {
        return global.infoAStudentCheckin;
    }

    static GetClassID() {
        return global.ClassID;
    }

    async OnPress(classID) {
        this.setState({ isLoading: true });
        let GetInfoAStudentFromServer = await GetInfoAStudent(classID, Login.GetInfoStudent().id);
        this.setState({ isLoading: false });

        if (GetInfoAStudentFromServer.status == -1) {
            Alert.alert('', 'Không thể kết nối với máy chủ');
            return {};
        } else {
            infoAStudentCheckin = GetInfoAStudentFromServer.data;
            global.ClassID = classID;
            return (this.props.navigation.navigate('HomeDiemDanhStudent'));
        }
    }

    onPress(path) {
        return (this.props.navigation.navigate(path));
    }
    render() {
        const styles = StyleSheet.create({
            profile: {
                position: 'absolute',
                left: '9.17 %',
                right: '60.28 %',
                top: '18.28 %',
                bottom: '64.53 %',
            },
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

            buttonDiemDanhTheoMonHoc: {
                position: 'absolute',
                left: '22.44 %',
                right: '18.56 %',
                top: '42.53 %',
                bottom: '48 %',
                marginBottom: 16,
            },
            absoluteViewBtnDiemDanhTheoMonHoc: {
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
            },
            TextDiemDanhTheoMonHoc: {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 16,
                textAlign: 'center',
                color: '#488DF5',
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

            scrollViewContainer: {
                elevation: 5,
                alignItems: 'center',
                padding: 16,
                borderRadius: 4,
                backgroundColor: '#FFF',
                shadowColor: '#000',
                shadowOpacity: 0.3,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 0 },
                marginBottom: 16,
                top: '5%',
            },
            categoryImage: {
                width: 90,
                height: 64
            },
            title: {
                textTransform: 'uppercase',
                marginBottom: 8,
                fontWeight: '700'
            },

            areaViewInfomation: {
                position: 'absolute',
                width: 200,
                height: 133,
                left: '45%',
                top: '20%',
                // backgroundColor: '#C4C4C4',
            }
        })

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            )
        }

        DrawListView = () => {
            // let listSubject = ['Cơ sở dữ liệu nâng cao', 'Kiểm thử phần mềm', 'Xử lý ảnh', 'Lập trình web', 'Lập trình Java']
            let listIDSubject = this.state.LoginClass
            let listSubject = Login.GetInfoStudent().class_name
            let table = []
            for (let i in listIDSubject) {
                table.push(
                    <TouchableOpacity onPress={this.OnPress.bind(this, this.state.LoginClass[i])}>
                        <View style={styles.scrollViewContainer}>
                            <Text style={styles.title}>{listIDSubject[i]} - {listSubject[i]}</Text>
                            <Image style={styles.categoryImage} source={eduIcon} />
                        </View>
                    </TouchableOpacity>
                )
            }
            return table;
        }

        DrawOnPress = () => {
            let listPath = ['HomeDiemDanhStudent', 'HomeStudent']
            let table = []
            for (let i in listPath) {
                table.push(
                    <TouchableOpacity onPress={this.onPress.bind(this, listPath[i])}>
                        <View style={styles.scrollViewContainer}>
                            <Text style={styles.title}>{listPath[i]}</Text>
                            <Image style={styles.categoryImage} source={eduIcon} />
                        </View>
                    </TouchableOpacity>
                )
            }
            return table;
        }
        return (


            <View style={styles.container}>

                <StatusBar hidden />
                <Image source={require('./image/header.png')} style={styles.header} />
                <Image source={require('./image/avaUser.png')} style={styles.profile} />
                {/* <TouchableOpacity onPress={this.OnPress.bind(this, this.state.LoginClass[1])}>
                    <View style={{ width: 100, height: 100, backgroundColor: 'grey' }}>
                        <Text>Click here</Text>
                    </View>
                </TouchableOpacity> */}


                <TouchableOpacity style={styles.buttonUser} onPress={() => { this.toggleDrawer() }}>
                    <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.backIconExit} onPress={() => {
                    this.props.navigation.navigate('HomeStudent')
                }}>
                    <Image source={require('./image/backIconExit.png')} style={styles.imgBackIconExit} />
                </TouchableOpacity>
                {/* <View style={{ top: '50%', backgroundColor: 'red', height: '100%' }}> */}
                {/* <ScrollView style={{backgroundColor: 'red', width: '100%', height: '100%'}}>
                    <TouchableOpacity style={styles.buttonDiemDanhTheoMonHoc}>
                        <Image source={require('./image/recDiemDanhTheoMonHoc.png')} style={{ height: '100%', width: '100%' }} />
                        <View style={styles.absoluteViewBtnDiemDanhTheoMonHoc}>
                            <Text style={styles.TextDiemDanhTheoMonHoc}>Điểm danh theo môn học:</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView> */}
                {/* </View> */}
                {/* </View> */}
                {/* {() => {
                    let table = []
                    for (let i = 0; i < 3; i++) {
                        table.push(
                            <TouchableOpacity style={styles.buttonDiemDanhTheoMonHoc}>
                                <Image source={require('./image/recDiemDanhTheoMonHoc.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                <View style={styles.absoluteViewBtnDiemDanhTheoMonHoc}>
                                    <Text style={styles.TextDiemDanhTheoMonHoc}>Điểm danh theo môn học:</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    return table
                }} */}
                <View style={styles.buttonDiemDanhTheoMonHoc}>
                    <Image source={require('./image/recDiemDanhTheoMonHoc.png')} style={{ height: '100%', width: '100%' }} />
                    <View style={styles.absoluteViewBtnDiemDanhTheoMonHoc}>
                        <Text style={styles.TextDiemDanhTheoMonHoc}>Điểm danh theo môn học:</Text>
                    </View>
                </View>

                <View style={
                    {
                        position: 'absolute',
                        top: '50%',
                        bottom: '2%',
                        width:'100%',
                    }
                }>
                    <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
                        {DrawListView()}
                        {/* {DrawOnPress()} */}
                    </ScrollView>
                </View>
                <View style={styles.areaViewInfomation}>
                    <Text style={styles.title}>{Login.GetInfoStudent().name}</Text>
                    <Text style={styles.title}>{Login.GetInfoStudent().id}</Text>
                    <Text style={styles.title}>17/10/1999</Text>
                </View>
            </View>




        );
    }
}



export default HomeProfileStudent;




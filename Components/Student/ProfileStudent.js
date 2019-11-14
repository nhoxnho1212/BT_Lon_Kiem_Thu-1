import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import eduIcon from './image/eduIcon.png'
import { FlatList } from 'react-native-gesture-handler';


class ProfileStudent extends Component {
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
            AvatarDefault: './image/userAvatar.png',
        }
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
                left: 0,
                right: 0,
                top: '40.53 %',
                bottom: '50 %',
                marginBottom: 16,
            },
            TextDiemDanhTheoMonHoc: {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontSize: 20,
                textAlign: 'center',
                color: '#488DF5',
                display: 'flex',
                textTransform: 'uppercase',
                marginBottom: 8,
                fontWeight: '700',
                position: 'absolute',
                left: '5%',
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
                height: 70,
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
        DrawListView = () => {
            let listSubject = ['Cơ sở dữ liệu nâng cao', 'Kiểm thử phần mềm', 'Xử lý ảnh']
            let table = []
            for (let i = 0; i < 10; i++) {
                table.push(
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('HomeDiemDanhStudent') }}
                    >
                        <View style={styles.scrollViewContainer}>
                            <Text style={styles.title}>{listSubject[i]}</Text>
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

                <TouchableOpacity style={styles.buttonUser} onPress={() => { this.toggleDrawer() }} >
                    <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.backIconExit}
                    onPress={() => { this.props.navigation.navigate('HomeStudent') }
                    }>
                    <Image source={require('./image/backIconExit.png')} style={styles.imgBackIconExit} />
                </TouchableOpacity>

                <View style={styles.buttonDiemDanhTheoMonHoc}>
                    <Text style={styles.TextDiemDanhTheoMonHoc}>Điểm danh theo môn học</Text>
                </View>

                <View style={{ position: 'absolute', top: '47%', bottom: 0, left: 0, right: 0, }}>
                    <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
                        {DrawListView()}
                    </ScrollView>
                </View>
                <View style={styles.areaViewInfomation}>
                    <Text style={styles.title}>Nguyễn Trần Nhật Thiện</Text>
                    <Text style={styles.title}>1751012068</Text>
                    <Text style={styles.title}>17/10/1999</Text>
                </View>
            </View>




        );
    }
}



export default ProfileStudent;





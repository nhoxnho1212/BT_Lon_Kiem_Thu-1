import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class DiemDanhStudent extends Component {
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
                position: 'absolute',
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

            areaTitleLeft: {
                position: 'absolute',
                width: '37.5%',
                height: '15%',
                left: '5%',
                top: '11%',
                // backgroundColor: '#C4C4C4',
            },
            areaTitleRight: {
                position: 'absolute',
                width: '50%',
                height: '15%',
                right: '5%',
                top: '11%',
                // backgroundColor: '#FC4C4C',
            },
            areaScrollView: {
                position: 'absolute',
                width: '90%',
                height: '65%',
                right: '5%',
                top: '30%',
                // backgroundColor: '#488DF5',
            },

            scrollViewContainerLeft: {
                // elevation: 5,
                alignItems: 'center',
                padding: 16,
                borderRadius: 4,
                backgroundColor: '#FFF',
                // shadowColor: '#000',
                // shadowOpacity: 0.3,
                // shadowRadius: 10,
                // shadowOffset: { width: 0, height: 0 },
                marginBottom: '2%',
                top: '5%',
                width: '55%',
                height: '10%',
                left: 0,
                // position: 'absolute',
            },
            title: {
                // position: 'absolute',
                textTransform: 'uppercase',
                marginBottom: 4,
                fontWeight: '700',
            },
        })

        DrawListView = () => {
            let listSubject = ['Cơ sở dữ liệu nâng cao', 'Kiểm thử phần mềm', 'Xử lý ảnh']
            let table = []
            for (let i = 0; i < 30; i++) {
                table.push(
                    <TouchableOpacity>
                        <View style={styles.scrollViewContainerLeft}>
                            <Text style={styles.title, { position: 'absolute' }}>hello</Text>
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

                <TouchableOpacity style={styles.buttonUser} onPress={() => { this.toggleDrawer() }} >
                    <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.backIconExit}
                onPress={() => { this.props.navigation.navigate('HomeProfileStudent') }}
                >
                    <Image source={require('./image/backIconExit.png')} style={styles.imgBackIconExit} />
                </TouchableOpacity>

                <View style={styles.areaTitleLeft}>
                    <Text style={styles.title}>Họ và tên:</Text>
                    <Text style={styles.title}>MSSV:</Text>
                    <Text style={styles.title}>Ngày sinh:</Text>
                </View>

                <View style={styles.areaTitleRight}>
                    <Text style={styles.title}>Nguyễn Trần Nhật Thiện</Text>
                    <Text style={styles.title}>1751012068</Text>
                    <Text style={styles.title}>17/10/1999</Text>
                </View>

                <View style={styles.areaScrollView}>
                    <ScrollView>
                        {DrawListView()}
                    </ScrollView>

                </View>

            </View>
        );
    }
}



export default DiemDanhStudent;
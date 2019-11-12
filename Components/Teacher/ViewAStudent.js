import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Button, FlatList, Dimensions,ActivityIndicator } from 'react-native';
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
            UserImage: require('./image/UserImage.png'),
            data: ';',
        }
    }


    render() {

        var styles = StyleSheet.create({
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
            UserImage: {
                position: 'absolute',
                left: '9.17%',
                right: '60.28%',
                top: '18.28%',
                bottom: '64.53%',
            },
            UserName: {
                position: 'absolute',
                left: '50%',
                right: '0%',
                top: '18.28%',
                bottom: '77.03%',

                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14,
                lineHeight: 16,
                display: 'flex',
                alignItems: 'center',

                color: '#000000',
            },
            UserID: {
                position: 'absolute',
                left: '50%',
                right: '0%',
                top: '24.06%',
                bottom: '71.88%',

                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14,
                lineHeight: 16,
                display: 'flex',
                alignItems: 'center',

                color: '#000000',
            },
            UserBirthDay: {
                position: 'absolute',
                left: '50%',
                right: '0%',
                top: '29.2%',
                bottom: '66.72%',

                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14,
                lineHeight: 16,
                display: 'flex',
                alignItems: 'center',

                color: '#000000',
            },
            BackgroundScollView: {
                position: 'absolute',
                left: '5.56%',
                right: '5.56%',
                top: '38.91%',
                bottom: '13.91%',

                backgroundColor: '#FEF6F5',
            },
            ScollView_header_NgayHoc: {
                position: 'absolute',
                flex: 1,
                width: '50%',
                top: '0%',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                justifyContent: 'center',
                backgroundColor: '#C4C4C4',
                // backgroundColor:'#f00',
                borderRadius: 4,
            },

            ScollView_IsChecked: {
                position: 'absolute',
                flex: 1,
                right: 0,
                top: '0%',
                left: '50.55%',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                justifyContent: 'center',
                backgroundColor: '#C4C4C4',
                // backgroundColor:'#f00',
                borderRadius: 4,
            },
            BackgroundScollView_text: {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14,
                lineHeight: 16,
                textAlign: 'center',
                color: '#488DF5',
                display: 'flex',

            },
            ScollViewArea: {
                position: 'absolute',
                // flex: 1,
                width: '100%',
                // top: '0%',
                top: Dimensions.get('screen').height * 4.6875 / 100,
                bottom: '0%',
                // backgroundColor: '#0f0',

            },
            ButtonComponent_View: {
                // position:'absolute',
                width: '100%',
                // left: '0',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                marginVertical: '0.4566%',
                flex: 1,
                justifyContent: 'center',
                // backgroundColor: '#f00',
            },

            ButtonComponent_Text: {
                position: 'absolute',
                // width: '100%',
                // height: '100%',
                // top: 20,
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14,
                lineHeight: 16,
                display: 'flex',
                alignItems: 'center',
                // left: '28%',
                // right: '6.57%',
                // backgroundColor:'#f00',

            },
            ScollView_component_NgayHoc: {
                position: 'absolute',
                flex: 1,
                width: '50%',
                top: '0%',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                justifyContent: 'center',
                backgroundColor: '#EAEAEA',
                // backgroundColor:'#f00',
                borderRadius: 4,
            },

            ScollView_component_IsChecked: {
                position: 'absolute',
                flex: 1,
                right: 0,
                top: '0%',
                left: '50.55%',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                justifyContent: 'center',
                backgroundColor: '#EAEAEA',
                // backgroundColor:'#f00',
                borderRadius: 4,
            },

        })

        drawbutton = () => {
            let table = []

            for (let i = 0; i < 20; i++) {
                var styleIsChecked = StyleSheet.flatten([styles.ScollView_component_IsChecked])
                if (i % 2 == 0) {
                    styleIsChecked.backgroundColor = '#488DF5';
                }
                table.push(

                    <View style={styles.ButtonComponent_View} >
                        <View style={styles.ScollView_component_NgayHoc}>
                            <Text style={styles.BackgroundScollView_text}>{i + 1}-10-2019</Text>
                        </View>
                        <View style={styleIsChecked}>
                        </View>
                    </View>
                )

            }
            return table;
        };
        return (

            <View style={styles.container}>

                <StatusBar hidden />
                <Image source={require('./image/header.png')} style={styles.header} />
                <TouchableOpacity style={styles.ButtonGoBack} onPress={() => { this.props.navigation.navigate('StudentListView') }}>
                    <Image source={require('./image/backIcon.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUser} onPress={this.toggleDrawer} >
                    <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <Image source={this.state.UserImage} style={styles.UserImage}></Image>
                <Text style= {styles.UserName}>Do Nguyen Thanh Tung</Text>
                <Text style= {styles.UserID}>1751010180</Text>
                <Text style= {styles.UserBirthDay}>03-10-1999</Text>
                <View style={styles.BackgroundScollView} >
                    <View style={styles.ScollView_header_NgayHoc}>
                        <Text style={styles.BackgroundScollView_text}>Ngày học</Text>
                    </View>

                    <View style={styles.ScollView_IsChecked}>
                    </View>
                    <ScrollView style={styles.ScollViewArea}>
                        <View style={{
                            justifyContent: 'center',
                            flex: 1,

                        }}>
                            {drawbutton()}

                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}



export default Home;
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Button, FlatList, Dimensions,ActivityIndicator } from 'react-native';
import React, { Component, useState } from 'react';
import HomeTeacher from '../../Screens/HomeTeacher';
import { NavigationEvents } from "react-navigation";
import ClassManager from './ClassManager';
import {GetInfoAStudent} from '../../Networking/Server';
class Home extends Component {
    static navigationOptions = {
        header: null,
    };
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigation.toggleDrawer();
    };
    constructor(props) {
        super(props);
        this.state = {
            data: ClassManager.GetAClass(),
            isUpdate: true,
            isLoading:false,
        }
        global.infoAStudentCheckin=[];
        global.infoAStudent={};
    }

    static GetInfoAStudentCheckin= ()=>{
        return global.infoAStudentCheckin;
    }
    
    static GetInfoAStudent= () => {
        return global.infoAStudent;
    }

    OnPress = async (studentID,studentName) => {
        this.setState({isLoading:true});
        let GetInfoAStudentFromServer = await GetInfoAStudent(ClassManager.GetClassID(),studentID);
        this.setState({isLoading:false});
        global.infoAStudentCheckin = GetInfoAStudentFromServer.data;
        global.infoAStudent= {
            id: studentID,
            name: studentName,
        }
        if (GetInfoAStudentFromServer.status ==-1 ){
            Alert.alert('', 'Không thể kết nối với máy chủ');
            return {};
        } else {

            this.props.navigation.navigate('ViewAStudent');
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
            BackgroundScollView: {
                position: 'absolute',
                left: '5.56%',
                right: '5.56%',
                top: '13.75%',
                bottom: '17.81%',

                backgroundColor: '#FEF6F5',
            },
            ScollView_header_STT: {
                position: 'absolute',
                flex: 1,
                width: '15.9375%',
                top: '0%',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                justifyContent: 'center',
                backgroundColor: '#C4C4C4',
                // backgroundColor:'#f00',
                borderRadius: 4,
            },
            ScollView_header_HoVaTen: {
                position: 'absolute',
                flex: 1,
                width: '74.6875%',
                top: '0%',
                left: '16.5625%',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                justifyContent: 'center',
                backgroundColor: '#C4C4C4',
                // backgroundColor:'#f00',
                borderRadius: 4,

            },
            ScollView_IsChecked: {
                position: 'absolute',
                flex: 1,
                width: '8.125%',
                top: '0%',
                left: '91.875%',
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
                top: '7%',
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
            ScollView_component_STT: {
                position: 'absolute',
                flex: 1,
                width: '15.9375%',
                top: '0%',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                justifyContent: 'center',
                backgroundColor: '#EAEAEA',
                // backgroundColor:'#f00',
                borderRadius: 4,
            },
            ScollView_component_HoVaTen: {
                position: 'absolute',
                flex: 1,
                width: '74.6875%',
                top: '0%',
                left: '16.5625%',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                justifyContent: 'center',
                backgroundColor: '#EAEAEA',
                // backgroundColor:'#f00',
                borderRadius: 4,

            },
            ScollView_component_IsChecked: {
                position: 'absolute',
                flex: 1,
                width: '8.125%',
                top: '0%',
                left: '91.875%',
                height: Dimensions.get('screen').height * 4.0625 / 100,
                justifyContent: 'center',
                backgroundColor: '#EAEAEA',
                // backgroundColor:'#f00',
                borderRadius: 4,
            },

        })

        drawbutton = () => {
            let table = []
            let counter = 0;
            let listStudent = this.state.data;

            for (let i in listStudent) {
                var styleIsChecked = StyleSheet.flatten([styles.ScollView_component_IsChecked])
                if (i % 2 == 0) {
                    styleIsChecked.backgroundColor = '#488DF5';
                }
                table.push(

                    <TouchableOpacity style={styles.ButtonComponent_View} onPress={this.OnPress.bind(this,listStudent[i].id,listStudent[i].name)}>
                        <View style={styles.ScollView_component_STT}>
                            <Text style={styles.BackgroundScollView_text}>{counter + 1}</Text>
                        </View>
                        <View style={styles.ScollView_component_HoVaTen}>
                            <Text style={styles.BackgroundScollView_text}>{listStudent[i].name}</Text>
                        </View>
                        <View style={styleIsChecked}>
                        </View>
                    </TouchableOpacity>
                )
                counter += 1;

            }
            return table;
        };
        return (

            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={() => {
                        this.setState({data:ClassManager.GetAClass()});
                     }} />
                <StatusBar hidden />
                <Image source={require('./image/header.png')} style={styles.header} />
                <TouchableOpacity style={styles.ButtonGoBack} onPress={() => { this.props.navigation.navigate('ClassManagerOwn') }}>
                    <Image source={require('./image/backIcon.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUser} onPress={this.toggleDrawer} >
                    <Image source= {require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <View style={styles.BackgroundScollView} >
                    <View style={styles.ScollView_header_STT}>
                        <Text style={styles.BackgroundScollView_text}>STT</Text>
                    </View>
                    <View style={styles.ScollView_header_HoVaTen}>
                        <Text style={styles.BackgroundScollView_text}>Họ và tên</Text>
                    </View>
                    <View style={styles.ScollView_IsChecked}>
                        {/* <Text style={styles.BackgroundScollView_text}>Họ và tên</Text> */}
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
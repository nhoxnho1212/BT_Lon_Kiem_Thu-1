import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Button,ActivityIndicator,Alert } from 'react-native';
import HomeTeacher from '../../Screens/HomeTeacher';
import Login from '../../Screens/Login';
import {GetInfoClass} from '../../Networking/Server';
import StudentListView from './StudentListView';
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
        global.AClass=[];
        global.ClassID='';
        this.state = {
            // AvatarDefault: './image/userAvatar.png',
            isLoading:false,
        }
    }
    static GetAClass() {
        return global.AClass;
    }

    static GetClassID() {
        return global.ClassID;
    }

    async OnPress(id) {
        this.setState({isLoading:true});
        let GetClassFromServer = await GetInfoClass(id);
        this.setState({isLoading:false});

        if (GetClassFromServer.status == -1){
            Alert.alert('', 'Không thể kết nối với máy chủ');
            return {};
        } else {
            global.AClass = GetClassFromServer.data;
            global.ClassID = id;
            return (this.props.navigation.navigate('ClassManagerOwn'));
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
            BackgroundScollView: {
                position: 'absolute',
                left: '5.56%',
                right: '5.56%',
                top: '15.62%',
                bottom: '4.38%',

                backgroundColor: '#FEF6F5',
            },
            BackgroundScollView_header: {
                position: 'absolute',
                flex: 1,
                width: '100%',
                top: '0%',
                bottom: '89.0625%',
                justifyContent: 'center',
                backgroundColor: '#D4D4D4',
            },
            BackgroundScollView_text: {
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 18,
                lineHeight: 21,
                textAlign: 'center',
                color: '#18191C',
                display: 'flex',

            },
            ScollViewArea: {
                position: 'absolute',
                // flex: 1,
                width: '100%',
                // top: '0%',
                top: '10.9375%',
                bottom: '0%',
                // backgroundColor: '#0f0',
            },
            ButtonComponent_View: {
                width: '80%',
                left: '10%',
                height: 70,

                flex: 1,

                marginBottom: '10%',
                marginTop: '10%',

                // paddingTop: 5,
                // paddingBottom: 5,
                // paddingLeft: 50,
                // paddingRight: 50,
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
                // width: '100%',
                // height: '100%',
                // top: 20,
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 13,   
                lineHeight: 15,
                display: 'flex',
                alignItems: 'center',
                left:'28%',
                right:'6.57%',
                // backgroundColor:'#f00',

            }

        })
        drawbutton = () => {
            let table = []
            let Classes=Login.GetClasses();
            
            for (let i in Classes) {
                table.push(
                    <TouchableOpacity style={styles.ButtonComponent_View} onPress={this.OnPress.bind(this,Classes[i].id)}>
                        <Text style={styles.ButtonComponent_Text} >{Classes[i].id} - {Classes[i].name} </Text>
                        <Image source={require('./image/eduIcon.png')} style={{position:'absolute',width:'20.51%',top:'20%',left:'1.73%'}}/>
                    </TouchableOpacity>
                )

            }
            return table;
        };
        return (

            <View style={styles.container}>

                <StatusBar hidden />
                <Image source={require('./image/header.png')} style={styles.header} />

                <TouchableOpacity style={styles.buttonUser} onPress={this.toggleDrawer} >
                    <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <View style={styles.BackgroundScollView} >
                    <View style={styles.BackgroundScollView_header}>
                        <Text style={styles.BackgroundScollView_text}>Danh sách lớp</Text>
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
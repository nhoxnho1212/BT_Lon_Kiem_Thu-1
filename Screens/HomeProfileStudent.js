import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, AsyncStorage, NativeModules, StatusBar, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileStudent from '../Components/Student/ProfileStudent';
import ClassManager from '../Components/Teacher/ClassManager';
import ClassManagerOwn from '../Components/Teacher/ClassManagerOwn';
import StudentListView from '../Components/Teacher/StudentListView';
import ViewAStudent from '../Components/Teacher/ViewAStudent';

const DrawerNavigator = createDrawerNavigator(
    {
    //Drawer Optons and indexing
    HomeProfileStudent: {
        //Title
        screen: ProfileStudent,
        navigationOptions: {
            drawerLabel: ('Trang chủ'),
        },

    },
    ClassManager: {
        screen: ClassManager,
        navigationOptions: {
            drawerLabel: 'quản lý lớp học',
        }
    },
    ClassManagerOwn: {
        screen:ClassManagerOwn,
        navigationOptions: {
            drawerLabel: ()=> null,
        }
    }, 
    StudentListView: {
        screen: StudentListView,
        navigationOptions: {
            drawerLabel: ()=> null,
        }
    },
    ViewAStudent: {
        screen: ViewAStudent,
        navigationOptions: {
            drawerLabel: ()=> null,
        }
    },
},
{
    drawerPosition: 'right'
}

)



export default createAppContainer(DrawerNavigator);

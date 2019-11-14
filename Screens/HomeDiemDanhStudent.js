import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, AsyncStorage, NativeModules, StatusBar, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import DiemDanhStudent from '../Components/Student/DiemDanhStudent';


const DrawerNavigator = createDrawerNavigator(
    {
    //Drawer Optons and indexing
    HomeDiemDanhStudent: {
        //Title
        screen: DiemDanhStudent,
        navigationOptions: {
            drawerLabel: ('Trang chủ'),
        },

    },
    
},
{
    drawerPosition: 'right'
}

)



export default createAppContainer(DrawerNavigator);


import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, AsyncStorage, NativeModules, StatusBar, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileStudent from '../Components/Student/ProfileStudent';


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
    
},
{
    drawerPosition: 'right'
}

)



export default createAppContainer(DrawerNavigator);


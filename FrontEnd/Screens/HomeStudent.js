// import React, { Component, useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
// import ChooseLogin from './chooseTypeLogin';

// class HomeTeacher extends Component {
//     static navigationOptions = {
//         header: null
//     };
//     render() {
//         console.log('is teacher: '+ChooseLogin.GetIsTeacher());
//         return (
//             <View>
//                 <Text>{ChooseLogin.GetIsTeacher()}</Text>
//             </View>
//         );
//     }
// }

// export default HomeTeacher;






import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, AsyncStorage, NativeModules, StatusBar, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import HomeStudent from '../../Components/Student/HomeStudent';


const DrawerNavigator = createDrawerNavigator(
    {
    //Drawer Optons and indexing
    HomeStudent1: {
        //Title
        screen: HomeStudent,
        navigationOptions: {
            drawerLabel: 'trang chủ',
        },

    },

},
{
    drawerPosition: 'right'
}

)



export default createAppContainer(DrawerNavigator);
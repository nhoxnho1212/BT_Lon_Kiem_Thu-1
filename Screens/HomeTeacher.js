import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, AsyncStorage, NativeModules, StatusBar, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Components/Teacher/Home';


const DrawerNavigator = createDrawerNavigator({
    //Drawer Optons and indexing
    Home: {
        //Title
        screen: Home,
        navigationOptions: {
            drawerLabel: 'trang chủ',
        },

    },

},

    {
        contentComponent: (props) => (
            <View style={{ flex: 1 }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerNavigatorItems {...props} />
                    <TouchableOpacity
                        onPress={
                            () => {
                                AsyncStorage.clear();
                                props.navigation.navigate('ChooseLogin')
                            }
                        }
                    >
                        <Text style={{ margin: 16, fontWeight: 'bold' }}>Đăng xuất</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        ),
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerPosition: 'right'
    });



export default createAppContainer(DrawerNavigator);


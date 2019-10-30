import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import ChooseLogin from './chooseTypeLogin';

class HomeTeacher extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        console.log('is teacher: '+ChooseLogin.GetIsTeacher());
        return (
            <View>
                <Text>{ChooseLogin.GetIsTeacher()}</Text>
            </View>
        );
    }
}

export default HomeTeacher;
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';


class ChooseLogin extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        global.isTeacher = false;

    }
    static GetIsTeacher() {
        return global.isTeacher;
    }



    render() {
        const styles = StyleSheet.create({
            container: {
                width: '100%',
                height: '100%',
                backgroundColor: '#E5E6E7',

            },
            rectangle2: {
                position: 'absolute',
                width: '100%',
                height: null,
                top: '32.89%',
                bottom: 0,
            },
            rectangle1: {
                position: 'absolute',
                width: '100%',
                height: null,
                top: '25.78%',
                bottom: 0,
            },
            btnGiangVien: {
                position: 'absolute',
                width: null,
                height: null,
                left: '16.11%',
                right: '16.11%',
                top: '58.59%',
                bottom: '32.81%',
            },
            absoluteViewBtnGiangVien: {
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',

                // left: '33.33%',
                // right: '35%',
                // top: "60.78%",
                // bottom: '34.84%',
            },
            TextGiangVien: {
                fontFamily: 'Roboto',
                fontSize: 24,
                fontStyle: 'normal',
                color: '#488DF5',
                textAlign: "center",
                lineHeight: 28,
                fontWeight: 'bold',
            },
            btnSinhVien: {
                position: 'absolute',
                // width: null,
                // height: 100,
                left: '16.11%',
                right: '16.11%',
                top: '72.19%',
                bottom: '19.22%',
            },
            absoluteViewBtnSinhVien: {
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',

                // left: '33.33%',
                // right: '35%',
                // top: "60.78%",
                // bottom: '34.84%',
            },
            TextSinhVien: {
                fontFamily: 'Roboto',
                fontSize: 24,
                fontStyle: 'normal',
                color: '#EFE4E4',
                textAlign: "center",
                lineHeight: 28,
                fontWeight: 'bold',
            }


        });

        return (
            <View style={styles.container}>
                <Image source={require('./image/Rectangle1.png')} style={styles.rectangle1} />
                <Image source={require('./image/Rectangle2.png')} style={styles.rectangle2} />
                <TouchableOpacity
                    onPress={() => {
                        global.isTeacher = true;
                        this.props.navigation.navigate('Login');
                    }}
                    style={styles.btnGiangVien}
                >
                    <Image source={require('./image/buttonGiangVien.png')} style= {{width:'100%',height:'100%',resizeMode:'contain'}} />
                    <View style={styles.absoluteViewBtnGiangVien}>
                        <Text style={styles.TextGiangVien}>Giảng viên</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    global.isTeacher = false;
                    this.props.navigation.navigate('Login');
                }}
                style={styles.btnSinhVien}
                >
                    <Image source={require('./image/buttonSinhVien.png')} style= {{width:'100%',height:'100%',resizeMode:'contain'}} />
                <View style={styles.absoluteViewBtnSinhVien}>
                    <Text style={styles.TextSinhVien}>Sinh viên</Text>
                </View>
                </TouchableOpacity>
            </View >
        );
    }

}


export default ChooseLogin;



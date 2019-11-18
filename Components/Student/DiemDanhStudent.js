import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Dimensions,ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationEvents } from "react-navigation";
import Login from '../../Screens/Login';
import ProfileStudent from './ProfileStudent';

class DiemDanhStudent extends Component {
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
            AvatarDefault: './image/userAvatar.png',
            infoStudent: Login.GetInfoStudent(),
            ListInfoCheckin: ProfileStudent.GetInfoAStudentCheckin(),
        }
    }


    render() {
        // const styles = StyleSheet.create({
        //     container: {
        //         width: '100%',
        //         height: '100%',
        //         backgroundColor: '#E5E6E7',
        //         position: 'absolute',
        //     },

        //     header: {
        //         position: 'absolute',
        //         left: '0%',
        //         right: '0%',
        //         top: '0%',
        //         bottom: '90.47%',
        //         width: '100%',
        //         height: 61,
        //     },
        //     buttonUser: {
        //         position: 'absolute',
        //         height: 38,
        //         left: '78.06%',
        //         right: '5%',
        //         top: 10,
        //         // backgroundColor: '#000000',
        //     },
        //     userAvatar: {
        //         position: 'absolute',
        //         height: 38,
        //         width: 38,
        //     },
        //     PolygonShowButton: {
        //         position: 'absolute',
        //         height: 8,
        //         right: 0,
        //         top: 15,
        //     },

        //     backIconExit: {
        //         position: 'absolute',
        //         left: '5%',
        //         height: 38,
        //         width: 38,
        //         top: 10,
        //     },
        //     imgBackIconExit: {
        //         position: 'absolute',
        //         height: 30,
        //         width: 30,
        //     },

        //     areaTitleLeft: {
        //         position: 'absolute',
        //         width: '37.5%',
        //         height: '15%',
        //         left: '5%',
        //         top: '11%',
        //         // backgroundColor: '#C4C4C4',
        //     },
        //     areaTitleRight: {
        //         position: 'absolute',
        //         width: '50%',
        //         height: '15%',
        //         right: '5%',
        //         top: '11%',
        //         // backgroundColor: '#FC4C4C',
        //     },
        //     areaScrollView: {
        //         position: 'absolute',
        //         width: '90%',
        //         height: '65%',
        //         right: '5%',
        //         top: '30%',
        //         // backgroundColor: '#488DF5',
        //     },

        //     scrollViewContainerLeft: {
        //         // elevation: 5,
        //         alignItems: 'center',
        //         padding: 16,
        //         borderRadius: 4,
        //         backgroundColor: '#FFF',
        //         // shadowColor: '#000',
        //         // shadowOpacity: 0.3,
        //         // shadowRadius: 10,
        //         // shadowOffset: { width: 0, height: 0 },
        //         marginBottom: '2%',
        //         top: '5%',
        //         width: '55%',
        //         height: '10%',
        //         left: 0,
        //         // position: 'absolute',
        //     },
        //     title: {
        //         // position: 'absolute',
        //         textTransform: 'uppercase',
        //         marginBottom: 4,
        //         fontWeight: '700',
        //     },
        // })

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

        DrawListView = () => {
            let listSubject = ['Cơ sở dữ liệu nâng cao', 'Kiểm thử phần mềm', 'Xử lý ảnh']
            let table = []
            for (let i = 0; i < 30; i++) {
                table.push(
                    <TouchableOpacity>
                        <View style={styles.scrollViewContainerLeft}>
                            <Text style={styles.title, { position: 'absolute' }}>hello</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            return table;
        }

        drawbutton = () => {
            let table = []
            let ListInfoCheckin = this.state.ListInfoCheckin;
            for (let i in ListInfoCheckin) {
                var styleIsChecked = StyleSheet.flatten([styles.ScollView_component_IsChecked])
                if (ListInfoCheckin[i].status == 1) {
                    styleIsChecked.backgroundColor = '#488DF5';
                }
                table.push(

                    <View style={styles.ButtonComponent_View} >
                        <View style={styles.ScollView_component_NgayHoc}>
                            <Text style={styles.BackgroundScollView_text}>{ListInfoCheckin[i].date}</Text>
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
                <NavigationEvents
                    onWillFocus={() => {
                        this.setState({ ListInfoCheckin: ProfileStudent.GetInfoAStudentCheckin() });
                    }} />
                <StatusBar hidden />
                <Image source={require('./image/header.png')} style={styles.header} />
                <TouchableOpacity style={styles.ButtonGoBack} onPress={() => { this.props.navigation.navigate('HomeProfileStudent') }}>
                    <Image source={require('./image/backIcon.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUser} onPress={this.toggleDrawer} >
                    <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
                    <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
                </TouchableOpacity>

                <Image source={this.state.UserImage} style={styles.UserImage}></Image>
                <Text style={styles.UserName}>{this.state.infoStudent.name}</Text>
                <Text style={styles.UserID}>{this.state.infoStudent.id}</Text>
                <Text style={styles.UserBirthDay}>17/10/1999</Text>
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

        // return (

        //     <View style={styles.container}>

        //         <StatusBar hidden />
        //         <Image source={require('./image/header.png')} style={styles.header} />

        //         <TouchableOpacity style={styles.buttonUser} onPress={() => { this.toggleDrawer() }} >
        //             <Image source={require('./image/userAvatar.png')} style={styles.userAvatar} />
        //             <Image source={require('./image/PolygonShowButton.png')} style={styles.PolygonShowButton} />
        //         </TouchableOpacity>

        //         <TouchableOpacity style={styles.backIconExit}
        //         onPress={() => { this.props.navigation.navigate('HomeProfileStudent') }}
        //         >
        //             <Image source={require('./image/backIconExit.png')} style={styles.imgBackIconExit} />
        //         </TouchableOpacity>

        //         <View style={styles.areaTitleLeft}>
        //             <Text style={styles.title}>Họ và tên:</Text>
        //             <Text style={styles.title}>MSSV:</Text>
        //             <Text style={styles.title}>Ngày sinh:</Text>
        //         </View>

        //         <View style={styles.areaTitleRight}>
        //             <Text style={styles.title}>Nguyễn Trần Nhật Thiện</Text>
        //             <Text style={styles.title}>1751012068</Text>
        //             <Text style={styles.title}>17/10/1999</Text>
        //         </View>

        //         <View style={styles.areaScrollView}>
        //             <ScrollView>
        //                 {DrawListView()}
        //             </ScrollView>

        //         </View>

        //     </View>
        // );
    }
}



export default DiemDanhStudent;
import React from 'react';
import { View, Text, ActivityIndicator,Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { NavigationEvents } from 'react-navigation';
import * as Permissions from 'expo-permissions';
import styles from './style';
import Toolbar from './toolbar';
import Gallery from './gallery';
import { Checkin } from '../../../Networking/Server';
import ClassManager from '../ClassManager';
export default class CameraPage extends React.Component {
  camera = null;

  state = {
    captures: [],
    capturing: null,
    hasCameraPermission: null,
    cameraType: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off,
    loaded: true,
    isloading: false,
  };

  setFlashMode = (flashMode) => this.setState({ flashMode });
  setCameraType = (cameraType) => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({ capturing: true });

  handleCaptureOut = () => {
    if (this.state.capturing)
      this.camera.stopRecording();
  };

  handleShortCapture = async () => {
    const photoData = await this.camera.takePictureAsync();
    this.setState({ capturing: false, captures: [photoData] })
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var today = dd + '-' + mm + '-' + yyyy;
    this.setState({ isloading: true });
    let req = await Checkin(ClassManager.GetClassID(), photoData, today);
    this.setState({ isloading: false });
    console.log(req.status);
    if (req.status == -1) {
      Alert.alert('', 'Không thể kết nối với máy chủ');
    }else {
      if (req.status == 0){
        Alert.alert('','điểm danh thật bại');
      }else {
        if (req.status == 1) {
          Alert.alert('','điểm danh thành công cho sinh viên: '+req.data);
        }
      }
    }
  };

  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

    this.setState({ hasCameraPermission });
  };

  render() {


    const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;
    const loaded = this.state.loaded;
    if (this.state.isloading){
      return(
        <View style={{flex: 1, justifyContent:'center'}}>
          <ActivityIndicator/>
          <Text style= {
            {
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 18,
              lineHeight: 21,
              textAlign: 'center',
              color: '#488DF5',
              display: 'flex',
              width:'100%',
            }
          }>Đang điểm danh</Text>
        </View>
      )
    }
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>Access to camera has been denied.</Text>;
    }

    return (
      <React.Fragment >
        <View >
          <NavigationEvents
            onWillFocus={payload => this.setState({ loaded: true })}
            onDidBlur={payload => {
              this.setState({ captures: [] });
              this.setState({ loaded: false });
            }} />
          {loaded && (
            <Camera
              type={cameraType}
              flashMode={flashMode}
              style={styles.preview}
              ref={camera => this.camera = camera}
              ratio='1:1'
            />)}
        </View>

        {captures.length > 0 && <Gallery captures={captures} />}

        <Toolbar
          capturing={capturing}
          flashMode={flashMode}
          cameraType={cameraType}
          setFlashMode={this.setFlashMode}
          setCameraType={this.setCameraType}
          onCaptureIn={this.handleCaptureIn}
          onCaptureOut={this.handleCaptureOut}

          onShortCapture={this.handleShortCapture}
        />
      </React.Fragment>
    );
  };
};
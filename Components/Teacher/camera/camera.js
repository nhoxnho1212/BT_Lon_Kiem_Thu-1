import React from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { NavigationEvents } from 'react-navigation';
import * as Permissions from 'expo-permissions';
import styles from './style';
import Toolbar from './toolbar';
import Gallery from './gallery';

export default class CameraPage extends React.Component {
  camera = null;

  state = {
    captures: [],
    capturing: null,
    hasCameraPermission: null,
    cameraType: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off,
    loaded: true,
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
    this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
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
              this.setState({captures:[]});
              this.setState({ loaded: false });
              } }/>
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
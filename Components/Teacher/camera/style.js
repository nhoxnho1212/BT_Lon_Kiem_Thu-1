import { StyleSheet, Dimensions } from 'react-native';

    const { width: winWidth, height: winHeight } = Dimensions.get('screen');

    export default StyleSheet.create({
      alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'#000'
      },
      preview: {
        height: winWidth,
        width: winWidth,
        position: 'absolute',
        // left: 0,
        top: (winHeight-100-winWidth)/2,
        // right: 0,
        // bottom: 0,

        
      },
      bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        bottom: 0,
      },
      captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#000",
      },
      captureBtnActive: {
        width: 80,
        height: 80,
      },
      captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
      },
      galleryContainer: {
        bottom: 100
      },
      galleryImageContainer: {
        width: 75,
        height: 75,
        marginRight: 5
      },
      galleryImage: {
        width: 75,
        height: 75
      }
    });
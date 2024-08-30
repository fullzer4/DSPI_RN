/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {FC, useEffect, useState} from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  useCameraDevices,
  Camera,
  useCameraPermission,
} from 'react-native-vision-camera';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs-react-native';
import Navbar from '../components/navbar';
import {RootStackParamList} from '../App';

type TestScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Test'
>;
type TestScreenRouteProp = RouteProp<RootStackParamList, 'Test'>;

type Props = {
  navigation: TestScreenNavigationProp;
  route: TestScreenRouteProp;
};

const TestScreen: FC<Props> = ({route, navigation}) => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const devices = useCameraDevices();
  const [cameraDevice, setCameraDevice] = useState<any | null>(null);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  useEffect(() => {
    const selectCameraDevice = async () => {
      const availableDevices = await Camera.getAvailableCameraDevices();
      if (availableDevices.length > 0) {
        setCameraDevice(availableDevices[0].id);
      }
    };

    selectCameraDevice();
  }, []);

  return (
    <>
      <Navbar navigation={navigation} />
      <View style={styles.container}>
        <Text>Test Screen</Text>
        {hasPermission && cameraDevice && (
          <Camera style={styles.camera} device={cameraDevice} isActive={true} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '80%',
    aspectRatio: 4 / 3,
  },
});

export default TestScreen;

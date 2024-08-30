/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC, useEffect, useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Vibration,
} from 'react-native';

// EXT
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProp} from '@react-navigation/native';
import VStyles from '../../styles/pages/games/desi';

// ROUTES

type DesiScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Desi'
>;
type DesiScreenRouteProp = RouteProp<RootStackParamList, 'Desi'>;

type Props = {
  navigation: DesiScreenNavigationProp;
  route: DesiScreenRouteProp;
};

const DesiGame: FC<Props> = ({navigation}) => {
  return (
    <View style={VStyles.container}>
      <Text style={VStyles.text}>Jogo em desenvolvimento!</Text>
      <TouchableOpacity
        style={VStyles.bt}
        onPress={() => navigation.navigate('Home')}>
        <Text style={VStyles.btText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DesiGame;

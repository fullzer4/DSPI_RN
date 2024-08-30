import React, {FC, useEffect, useState} from 'react';
import {Button, Text, View, useWindowDimensions} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import VStyles from '../styles/components/vertical/Navbar.style';
import HStyles from '../styles/components/horizontal/Navbar.style';

type NavbarScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

type Props<T extends keyof RootStackParamList> = {
  navigation: NavbarScreenNavigationProp<T>;
};

const Navbar: FC<Props<keyof RootStackParamList>> = ({navigation}) => {
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const handleTestPress = () => {
    navigation.navigate('Test');
  };

  return (
    <View
      style={
        orientation === 'portrait' ? VStyles.navbarBox : HStyles.navbarBox
      }>
      <Text>FNDFL</Text>
      <Button onPress={handleTestPress} title="Test" />
    </View>
  );
};

export default Navbar;

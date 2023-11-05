import React, {FC, useEffect, useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import VStyles from '../styles/pages/vertical/LoginScreen.style';
import HStyles from '../styles/pages/horizontal/LoginScreen.style';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: FC<Props> = ({navigation}) => {
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View
      style={
        orientation === 'portrait' ? VStyles.container : HStyles.container
      }>
      <View
        style={
          orientation === 'portrait'
            ? VStyles.titleContainer
            : HStyles.titleContainer
        }>
        <Text
          style={orientation === 'portrait' ? VStyles.title : HStyles.title}>
          Libras
        </Text>
        <Text
          style={
            orientation === 'portrait' ? VStyles.subtitle : HStyles.subtitle
          }>
          Champ Robot
        </Text>
      </View>
      <View
        style={
          orientation === 'portrait'
            ? VStyles.formContainer
            : HStyles.formContainer
        }>
        <View
          style={orientation === 'portrait' ? VStyles.forms : HStyles.forms}>
          <View
            style={
              orientation === 'portrait' ? VStyles.inputBox : HStyles.inputBox
            }>
            <Text
              style={
                orientation === 'portrait'
                  ? VStyles.inputLabel
                  : HStyles.inputLabel
              }>
              Email
            </Text>
            <TextInput
              style={orientation === 'portrait' ? VStyles.input : HStyles.input}
              placeholder="usuario@gmail.com"
            />
          </View>
          <View
            style={
              orientation === 'portrait' ? VStyles.inputBox : HStyles.inputBox
            }>
            <Text
              style={
                orientation === 'portrait'
                  ? VStyles.inputLabel
                  : HStyles.inputLabel
              }>
              Senha
            </Text>
            <TextInput
              style={orientation === 'portrait' ? VStyles.input : HStyles.input}
              placeholder="senha"
            />
          </View>
          <View
            style={
              orientation === 'portrait' ? VStyles.otherBox : HStyles.otherBox
            }>
            <Pressable
              style={
                orientation === 'portrait'
                  ? VStyles.registerContainer
                  : HStyles.registerContainer
              }
              onPress={() => goToSignup()}>
              <Text
                style={
                  orientation === 'portrait'
                    ? VStyles.register
                    : HStyles.register
                }>
                NAO TENHO CADASTRO
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={
          orientation === 'portrait' ? VStyles.loginBox : HStyles.loginBox
        }>
        <Pressable
          style={
            orientation === 'portrait'
              ? VStyles.loginContainer
              : HStyles.loginContainer
          }>
          <Text
            style={orientation === 'portrait' ? VStyles.login : HStyles.login}>
            Logar
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

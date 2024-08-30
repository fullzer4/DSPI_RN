/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC, useEffect, useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import VStyles from '../styles/pages/vertical/LoginScreen.style';
import HStyles from '../styles/pages/horizontal/LoginScreen.style';
import fetchSignup from '../fetchs/signup';

type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
type SignupScreenRouteProp = RouteProp<RootStackParamList, 'Signup'>;

type Props = {
  navigation: SignupScreenNavigationProp;
  route: SignupScreenRouteProp;
};

const SignupScreen: FC<Props> = ({navigation}) => {
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleRepeatPasswordChange = (text: string) => {
    setRepeatPassword(text);
  };

  const signup = async () => {
    if (password !== repeatPassword) {
      console.error('As senhas não coincidem');
      return;
    }

    console.log(password, repeatPassword);

    const result = await fetchSignup(name, email, password, repeatPassword);

    if (result.includes('error')) {
      console.error(result);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={VStyles.container}>
      <View style={VStyles.firstCont}>
        <Text style={VStyles.title}>Champ Robot</Text>
        <Text style={VStyles.subtitle}>Libras</Text>
      </View>

      <View style={VStyles.midContainer}>
        <View style={VStyles.inpsOut}>
          <Text style={VStyles.innerTitle}>Nome</Text>
          <TextInput
            style={VStyles.inp}
            value={name}
            onChangeText={handleNameChange}
            placeholder="Nome de usuário"
          />
        </View>
        <View style={VStyles.inpsOut}>
          <Text style={VStyles.innerTitle}>Email</Text>
          <TextInput
            style={VStyles.inp}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="ex@gmail.com"
          />
        </View>
        <View style={VStyles.inpsOut}>
          <Text style={VStyles.innerTitle}>Senha</Text>
          <TextInput
            secureTextEntry={true}
            style={VStyles.inp}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="********"
          />
        </View>
        <View style={VStyles.inpsOut}>
          <Text style={VStyles.innerTitle}>Repetir senha</Text>
          <TextInput
            secureTextEntry={true}
            style={VStyles.inp}
            value={repeatPassword}
            onChangeText={handleRepeatPasswordChange}
            placeholder="********"
          />
        </View>
        <View style={VStyles.inpsOut}>
          <TouchableOpacity onPress={() => signup()} style={VStyles.bt}>
            <Text style={VStyles.btin}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={VStyles.registerOut} onPress={() => goToLogin()}>
        <Text style={VStyles.registerText1}>Já tem cadastro?</Text>
        <Text style={VStyles.registerText2}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

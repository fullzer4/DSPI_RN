import React, {FC, useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Vibration,
} from 'react-native';

// EXT
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProp} from '@react-navigation/native';

// STYLES
import VStyles from '../styles/pages/vertical/LoginScreen.style';
//import HStyles from '../styles/pages/horizontal/LoginScreen.style';

// ROUTES
import fetchLogin from '../fetchs/login';

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
  const [_orientation, setOrientation] = useState('portrait');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const login = async () => {
    setMsg('Carregando');
    const result = await fetchLogin(email, password);
    if (result.includes('error')) {
      console.error(result);
      setMsg('Tente novamente');
    } else {
      await AsyncStorage.setItem('@user', email);
      Vibration.vibrate(1000);
      setMsg('');
      navigation.navigate('Home');
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
          <Text style={VStyles.innerTitle}>Email</Text>
          <TextInput
            style={VStyles.inp}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="ex@email.com"
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
          <TouchableOpacity onPress={() => login()} style={VStyles.bt}>
            <Text style={VStyles.btin}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Text>{msg}</Text>
      </View>

      <TouchableOpacity
        style={VStyles.registerOut}
        onPress={() => goToSignup()}>
        <Text style={VStyles.registerText1}>Ainda não tem cadastro?</Text>
        <Text style={VStyles.registerText2}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SingupScreen';
import TestScreen from './pages/TestScreen';
import VogalGame from './pages/games/Vogais';
import DesiGame from './pages/games/Desi';
import { GamePointsProvider } from './context';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Signup: undefined;
  Vogais: undefined;
  Desi: undefined;
  Test: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <GamePointsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Test"
            component={TestScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Vogais"
            component={VogalGame}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Desi"
            component={DesiGame}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GamePointsProvider>
  );
};

export default App;

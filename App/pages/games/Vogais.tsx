import React, {FC, useEffect, useState, useContext} from 'react';
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
import VStyles from '../../styles/pages/games/vogais';
import {GamePointsContext} from '../../context';

// ROUTES

import Intro from '../../components/games/vogais/intro';
import Start from '../../components/games/vogais/start';
import First from '../../components/games/vogais/first';
import Second from '../../components/games/vogais/second';
import Third from '../../components/games/vogais/third';
import Quiz1 from '../../components/games/vogais/quiz1';
import Result from '../../components/games/vogais/result';
import Nome from '../../components/games/vogais/nome';

type VogalScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Vogais'
>;
type VogalScreenRouteProp = RouteProp<RootStackParamList, 'Vogais'>;

type Props = {
  navigation: VogalScreenNavigationProp;
  route: VogalScreenRouteProp;
};

const VogalGame: FC<Props> = ({navigation}) => {
  const [nowPage, setNowPage] = useState(0);
  const [lastAnsw, setNewAnsw] = useState(false);
  const {gamePoints, setGamePoints} = useContext(GamePointsContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUser = async () => {
      let res: any = await AsyncStorage.getItem('@user');
      setUserName(res);
      console.log(res, 'asfd');
    };
    getUser();
  }, [userName]);;

  const nextp = (correctAnsw?: string) => {
    if (correctAnsw) {
      if (correctAnsw == 'acertou') {
        setNewAnsw(true);
      } else {
        setNewAnsw(false);
      }
    } else {
      console.log('Não é quiz');
    }
    setNowPage(nowPage + 1);
  };

  const voltar = () => {
    setNowPage(nowPage - 1);
  };

  const backHome = () => {
    navigation.navigate('Home');
    fetch('https://nbrasil.online/TUDO/dspi/points');
  };

  const partes = [
    <Intro nextPage={() => nextp()} leave={() => backHome()} />,
    <Start
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
    />,
    <First
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="A"
    />,
    <Second
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
    />,
    <Third
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
    />,
    <Quiz1
      nextPage={(e: string) => nextp(e)}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="A"
    />,
    <Result
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      res={lastAnsw}
    />,
    <First
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="E"
    />,
    <Quiz1
      nextPage={(e: string) => nextp(e)}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="E"
    />,
    <Result
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      res={lastAnsw}
    />,

    <First
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="I"
    />,
    <Quiz1
      nextPage={(e: string) => nextp(e)}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="I"
    />,
    <Result
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      res={lastAnsw}
    />,

    <First
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="O"
    />,
    <Quiz1
      nextPage={(e: string) => nextp(e)}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="O"
    />,
    <Result
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      res={lastAnsw}
    />,
    <First
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="U"
    />,
    <Quiz1
      nextPage={(e: string) => nextp(e)}
      voltar={() => voltar()}
      leave={() => backHome()}
      letter="U"
    />,
    <Result
      nextPage={() => nextp()}
      voltar={() => voltar()}
      leave={() => backHome()}
      res={lastAnsw}
    />,
    <Nome
      nextPage={() => nextp()}
      leave={() => backHome()}
    />,
    ];

  const getPoints = async () => {
    await fetch(`https://nbrasil.online/TUDO/dspi/points?user=${userName}`)
      .then(e => e.text())
      .then(e => {
        setGamePoints(Number(e));;
        backHome();
      });
  };;

  const setPoints = async () => {
    await fetch(`https://nbrasil.online/TUDO/dspi/set?user=${userName}&p=25`).then(
      e => {
        console.log('fetchado');;
        getPoints();
      }
    );
  };

  useEffect(() => {
    if (!partes[nowPage]) {
      setPoints();
    }
  }, [nowPage]);

  return <View>{partes[nowPage]}</View>;
};

export default VogalGame;

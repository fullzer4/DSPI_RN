/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC, useEffect, useState, useContext} from 'react';
import {
  Pressable,
  View,
  useWindowDimensions,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  Vibration,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GameCard from '../components/GameCard';
import VStyles from '../styles/pages/vertical/HomeScreen.style';
import {RootStackParamList} from '../App';
import quizData from '../data.quiz';
import Navbar from '../components/navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GamePointsContext} from '../context';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

const HomeScreen: FC<Props> = ({navigation}) => {
  const window = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');
  const [gameTitle, setGameTitle] = useState('');
  const {gamePoints, setGamePoints} = useContext(GamePointsContext);
  const [gamePoints2, setGamePoints2] = useState(0);
  const [gameDesc, setGameDesc] = useState('');
  const [gameImg, setGameImg] = useState('');
  const [gameClass, setGameClass] = useState('none');
  const [urlGame, setGameUrl] = useState('');

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUser = async () => {
      let res: any = await AsyncStorage.getItem('@user');
      setUserName(res);
      getP()

    };

    getUser();
  }, [userName]);

  const getP = () => {
    fetch(`https://nbrasil.online/TUDO/dspi/points?user=${userName}`)
      .then(e => e.text())
      .then(e => {
        console.log(userName)
        setGamePoints(Number(e));
        console.log(e);
      });
  }

  useEffect(() => {
    getP()
  }, [gamePoints]);

  useEffect(() => {
    const newOrientation =
      window.width > window.height ? 'landscape' : 'portrait';
    setOrientation(newOrientation);
  }, [window]);

  const goToGame = () => {
    navigation.navigate(urlGame ? urlGame : 'Desi');
  };

  const openGame = (
    quizName: string,
    image: string,
    desc: string,
    points: number,
    url: string,
  ) => {
    setGameTitle(quizName);
    setGamePoints2(points);
    setGameDesc(desc);
    setGameImg(image);
    setGameUrl(url);
    setGameClass('block');
  };

  const getGames = () => {
    return quizData.map(i => (
      <TouchableOpacity
        key={quizData.indexOf(i)}
        onPress={() => openGame(i.title, i.url, i.desc, i.points, i.page)}
        style={VStyles.card}>
        <View style={VStyles.blackout}>
          <Text style={VStyles.blackouttext}>{i.title}</Text>
        </View>
        <Image style={VStyles.imageCard} source={{uri: `${i.url}`}} />
      </TouchableOpacity>
    ));
  };
  return (
    <View style={VStyles.container}>
      <View style={VStyles.header}>
        <View style={VStyles.headerin}>
          <View style={VStyles.user} />
          <Text style={VStyles.textheader}>{userName}</Text>
        </View>

        <View style={VStyles.headerin}>
          <Image source={require('../assets/str.png')} />
          <Text style={VStyles.textheaderpoints}>{gamePoints}</Text>
        </View>
      </View>

      <View style={VStyles.content}>
        <Text style={VStyles.title}>Jogos</Text>
        <View style={VStyles.gamesout}>{getGames()}</View>
      </View>

      {/* SHOW GAME INFOS  */}
      <View style={[VStyles.screenOut, {display: gameClass}]}>
        <View style={VStyles.gameInfosOut}>
          <View style={VStyles.topInfos}>
            <Text style={VStyles.titleGame}>{gameTitle}</Text>
            <View style={VStyles.pointsOut}>
              <Image source={require('../assets/str.png')} />
              <Text style={VStyles.pointsGame}>25</Text>
            </View>
          </View>
          <Text style={VStyles.descGame}>{gameDesc}</Text>

          <TouchableOpacity
            onPress={() => goToGame()}
            style={VStyles.startGame}>
            <Text style={VStyles.startGameText}>Jogar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setGameClass('none')}>
            <Text style={VStyles.fecharJogo}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

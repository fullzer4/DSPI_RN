/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import VStyles from '../../../styles/components/games/vogais/intro';
import Sound from "react-native-sound";

Sound.setCategory('Playback');

interface gameIn {
  nextPage: () => void;
  voltar: () => void;
  leave: () => void;
  res: boolean;
}

export default function Result({nextPage, voltar, leave, res}: gameIn) {
  const [bgColor, setBgColor] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {

    if (res) {
      setBgColor('#B5D48E');
      let asnwSound = new Sound('https://nbrasil.online/dspi/certo.mp3', Sound.MAIN_BUNDLE, (error) => {
        asnwSound.play();
      });
      setMsg('Parabéns você Acertou!');
    } else {
      setBgColor('#F16C60');
      let asnwSound = new Sound('https://nbrasil.online/dspi/errado.mp3', Sound.MAIN_BUNDLE, (error) => {
        asnwSound.play();
      });
      setMsg('Quase lá... tente novamente!');
    }
  }, [msg]);

  const imgRobo = (): React.JSX.Element => {
    if (res) {
      return <Image source={require('../../../assets/robo2.png')} />;
    }

    return <Image source={require('../../../assets/robo3.png')} />;
  };

  return (
    <View style={[VStyles.container2, {backgroundColor: bgColor}]}>
      <Text style={VStyles.titleSpec}>{msg}</Text>
      {imgRobo()}
      <TouchableOpacity style={VStyles.bt} onPress={res ? nextPage : voltar}>
        <Text style={VStyles.btText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  );
}

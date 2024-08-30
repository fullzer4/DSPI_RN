import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import VStyles from "../../../styles/components/games/vogais/intro";
import { useState } from "react";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

interface gameIn{ 
    nextPage: () => void, 
    leave: () => void
}

// Mapeando cada letra para a imagem correspondente
const images: { [key: string]: any } = {
    a: require('../../../assets/letras/aL.png'),
    b: require('../../../assets/letras/bL.png'),
    c: require('../../../assets/letras/cL.png'),
    d: require('../../../assets/letras/dL.png'),
    e: require('../../../assets/letras/eL.png'),
    f: require('../../../assets/letras/fL.png'),
    g: require('../../../assets/letras/gL.png'),
    h: require('../../../assets/letras/hL.png'),
    i: require('../../../assets/letras/iL.png'),
    j: require('../../../assets/letras/jL.png'),
    k: require('../../../assets/letras/kL.png'),
    l: require('../../../assets/letras/lL.png'),
    m: require('../../../assets/letras/mL.png'),
    n: require('../../../assets/letras/nL.png'),
    o: require('../../../assets/letras/oL.png'),
    p: require('../../../assets/letras/pL.png'),
    q: require('../../../assets/letras/qL.png'),
    r: require('../../../assets/letras/rL.png'),
    s: require('../../../assets/letras/sL.png'),
    t: require('../../../assets/letras/tL.png'),
    u: require('../../../assets/letras/uL.png'),
    v: require('../../../assets/letras/vL.png'),
    w: require('../../../assets/letras/wL.png'),
    x: require('../../../assets/letras/xL.png'),
    y: require('../../../assets/letras/yL.png'),
    z: require('../../../assets/letras/zL.png'),
  };
  

export default function Nome({nextPage, leave}: gameIn){
    const [name, setName] = useState('');

    const getLetters = () => {
        return name.split('').map((letter: String, index) => {
            // Usando o objeto de imagens para obter a imagem correspondente
            const image = images[letter.toLowerCase()];
            return <Image style={[VStyles.imgNome, {width: (width / name.length - 10), height: (width / name.length - 10), maxWidth: width / 2, maxHeight: width / 2}]} key={index}  source={image} />
        });
    }

    return(
        <View style={VStyles.container}>
            <Text style={VStyles.text}>Coloque seu nome abaixo e veja como são as letras!</Text>
            <TextInput placeholder="Digite seu nome" style={{borderBottomColor: "black", borderBottomWidth: 2}} onChangeText={e => setName(e)}/>
            
            <View style={{flexDirection: "row", gap: 10}}>{getLetters()}</View>

            <TouchableOpacity style={VStyles.bt} onPress={nextPage}>
                <Text style={VStyles.btText}>Próximo</Text>
            </TouchableOpacity>

            
        </View>
    )
}

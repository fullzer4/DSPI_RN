import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import VStyles from "../../../styles/components/games/vogais/intro";

interface gameIn{ 
    nextPage: () => void, 
    voltar: () => void
    leave: () => void,
}

export default function Start({nextPage, voltar, leave}: gameIn){
    return(
        <View style={VStyles.container2}>
            <Text style={VStyles.text}>Essas são as cinco vogais do nosso alfabeto!</Text>
            <View style={VStyles.showImgOut}>
                <View style={VStyles.double}>
                    <Image style={VStyles.img} source={require('../../../assets/letras/aL.png')}></Image>
                    <Image style={VStyles.img} source={require('../../../assets/letras/a.png')}></Image>
                </View>
                <View style={VStyles.double}>
                    <Image style={VStyles.img} source={require('../../../assets/letras/eL.png')}></Image>
                    <Image style={VStyles.img} source={require('../../../assets/letras/e.png')}></Image>
                </View>
                <View style={VStyles.double}>
                    <Image style={VStyles.img} source={require('../../../assets/letras/iL.png')}></Image>
                    <Image style={VStyles.img} source={require('../../../assets/letras/i.png')}></Image>
                </View>
                <View style={VStyles.double}>
                    <Image style={VStyles.img} source={require('../../../assets/letras/oL.png')}></Image>
                    <Image style={VStyles.img} source={require('../../../assets/letras/o.png')}></Image>
                </View>
                <View style={VStyles.double}>
                    <Image style={VStyles.img} source={require('../../../assets/letras/uL.png')}></Image>
                    <Image style={VStyles.img} source={require('../../../assets/letras/u.png')}></Image>
                </View>
                
               
                
                
            </View>
            <TouchableOpacity style={VStyles.bt} onPress={nextPage}>
                <Text style={VStyles.btText}>Próximo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={voltar}>
                <Text style={VStyles.textOut}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
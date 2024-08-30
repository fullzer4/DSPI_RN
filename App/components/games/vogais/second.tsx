import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import VStyles from "../../../styles/components/games/vogais/intro";

interface gameIn{ 
    nextPage: () => void, 
    voltar: () => void
    leave: () => void,
}

export default function Second({nextPage, voltar, leave}: gameIn){
    return(
        <View style={VStyles.container2}>
            <Text style={VStyles.text}>Ei amiguinho, faça o “A” novamente!</Text>
            <View style={VStyles.showImgOut}>
                <View style={VStyles.double}>
                    <Image style={VStyles.img} source={require('../../../assets/robo.png')}></Image>
                    <Image style={VStyles.img} source={require('../../../assets/letras/a.png')}></Image>
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
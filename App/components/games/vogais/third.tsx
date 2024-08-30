import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import VStyles from "../../../styles/components/games/vogais/intro";

interface gameIn{ 
    nextPage: () => void, 
    voltar: () => void
    leave: () => void,
}

export default function Third({nextPage, voltar, leave}: gameIn){
    return(
        <View style={[VStyles.container2, {backgroundColor: "#B5D48E"}]}>
            <Text style={VStyles.titleSpec}>Parabéns!</Text>
            <Text style={VStyles.subSpec}>Vamos ver se você aprendeu?</Text>
            <View style={VStyles.showImgOut}>
                <View style={VStyles.double}>
                    <Image style={VStyles.img2} source={require('../../../assets/robo2.png')}></Image>
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
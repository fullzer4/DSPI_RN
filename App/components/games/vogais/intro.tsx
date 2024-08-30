import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import VStyles from "../../../styles/components/games/vogais/intro";

interface gameIn{ 
    nextPage: () => void, 
    leave: () => void
}

export default function Intro({nextPage, leave}: gameIn){
    return(
        <View style={VStyles.container}>
            <Text style={VStyles.text}>Esse é o jogo de vogais em libras, vamos começar?</Text>
            <TouchableOpacity style={VStyles.bt} onPress={nextPage}>
                <Text style={VStyles.btText}>Iniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={leave}>
                <Text style={VStyles.textOut}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}
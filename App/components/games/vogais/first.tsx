import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import VStyles from "../../../styles/components/games/vogais/intro";

interface gameIn{ 
    nextPage: () => void, 
    voltar: () => void
    leave: () => void,
    letter: string
}

export default function First({nextPage, voltar, leave, letter}: gameIn){
    const getLetter = () => {
        if(letter == "A"){
            return <View style={VStyles.double}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/aL.png')}></Image>
                        <Image style={VStyles.img} source={require('../../../assets/letras/a.png')}></Image>
                    </View>
        }

        if(letter == "E"){
            return <View style={VStyles.double}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/eL.png')}></Image>
                        <Image style={VStyles.img} source={require('../../../assets/letras/e.png')}></Image>
                    </View>
        }

        if(letter == "I"){
            return <View style={VStyles.double}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/iL.png')}></Image>
                        <Image style={VStyles.img} source={require('../../../assets/letras/i.png')}></Image>
                    </View>
        }

        if(letter == "O"){
            return <View style={VStyles.double}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/oL.png')}></Image>
                        <Image style={VStyles.img} source={require('../../../assets/letras/o.png')}></Image>
                    </View>
        }

        if(letter == "U"){
            return <View style={VStyles.double}>
                        <Image style={VStyles.img} source={require('../../../assets/letras/uL.png')}></Image>
                        <Image style={VStyles.img} source={require('../../../assets/letras/u.png')}></Image>
                    </View>
        }
    }
    return(
        <View style={VStyles.container2}>
            <Text style={VStyles.text}>Vamos aprender a letra "{letter}"</Text>
            <View style={VStyles.showImgOut}>
                {getLetter()}
            </View>
            <Text style={VStyles.text}>Tente fazer na sua casa</Text>

            <TouchableOpacity style={VStyles.bt} onPress={nextPage}>
                <Text style={VStyles.btText}>Próximo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={voltar}>
                <Text style={VStyles.textOut}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
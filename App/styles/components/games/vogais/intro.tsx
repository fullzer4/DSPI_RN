import {StyleSheet} from 'react-native';

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const VStyles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    paddingTop: 60,
    padding: 20,
    backgroundColor: "white"
  },
  container2: {
    height: height,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 40,
    paddingTop: 60,
    padding: 20,
    backgroundColor: "white"
  },
  titleSpec: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center"
  },
  subSpec: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center"
  },
  double: {
    flexDirection: "row",
    width: width,
    gap: 5,
    justifyContent: "center",
    flexWrap: "wrap"
  },
  showImgOut:{
    width: width,
    flexWrap: "wrap",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
  },
  img: {
    width: 90,
    height: 90
  },
  img2: {
    width: 130,
    height: 130
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "black"
  },
  bt: {
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    backgroundColor: "#0CC0DF"
  },
  btText: {
    color: "white",
    fontSize: 18,
  },
  textOut: { 
    color: "black",
    fontSize: 16
  }

});

export default VStyles;

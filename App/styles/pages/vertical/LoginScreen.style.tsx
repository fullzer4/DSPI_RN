import {StyleSheet} from 'react-native';

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const VStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 40,
//     backgroundColor: "red",

  },
  firstCont: {
    paddingTop: 40,
    alignItems: "center",
    gap: 10
  },
  midContainer: {
    gap: 20,
    width: width - 100
  },
  innerTitle: {
    fontWeight: "700",
    fontSize: 18,
    color: "black"
  },
  inpsOut: {
    gap: 10
  },
  bt: {
    width: width - 100,
    backgroundColor: "#FB3131",
    padding: 10,
    alignItems: "center",
    borderRadius: 5
  },
  btin: {
    color: "white",
    fontSize: 18,
  },
  inp: {
    borderRadius: 5,
    borderColor: "#FB313140",
    borderWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
    color: "black"

  },
  title:{
    fontSize: 38,
    color: "#FB3131",
    fontWeight: "700"

  },
  subtitle: {
    fontSize: 24,
    color: "#FB3131",
    fontWeight: "700"
  },
  registerOut:{
    backgroundColor: "#FB3131",
    width: width,
//     borderRadius: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    gap: 10
  },
  registerText1:{
    color: "white",
    fontSize: 20,
    fontWeight: "700"
  },
  registerText2:{
    color: "white",
    fontSize: 18,
    fontWeight: "700"
  }
});

export default VStyles;

import {StyleSheet} from 'react-native';

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const VStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  text: {
    fontWeight: "700",
    color: "black",
    fontSize: 18,
  },
  bt: {
    backgroundColor: "#FB3131",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  btText: {
    color: "white",
    fontSize: 18,
  }
});

export default VStyles;

import {StyleSheet} from 'react-native';

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const VStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
    padding: 30,
  },
  header:{
    width: width - 60,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerin: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },
  textheader: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: 'TitanOne-Regular',
  },
  textheaderpoints: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FB3131"
  },
  user:{
    width: 50,
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 100
  },
  content: {
    marginTop: 30,
    gap: 30,
  },
  gamesout:{
    gap: 20,
    flexDirection: "column"
  },
  card: {
    width: width - 60,
    height: 140,
    borderRadius: 5,
    backgroundColor: "gray",
    borderBottomWidth: 2,
    borderColor: "blue",
    position: "relative",
    overflow: "hidden"
  }, 
  title: {
    color: "#FB3131",
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "flex-start"
  },
  screenOut: {
    backgroundColor: "#00000090",
    position: "absolute",
    width: width,
    height: height,
    top: 0,
    left: 0,
    justifyContent: "flex-end"
  },
  gameInfosOut: {
    minHeight: height - height / 3,  
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 30,
    gap: 30,
    alignItems: "center"
  },
  topInfos: {
    alignItems: "center",
    gap: 20
  },
  titleGame: {
    fontSize: 45,
    color: "#FB3131",
    fontWeight: "700"
  },
  pointsGame: {
    fontSize: 25,
    color: "#FB3131",
    fontWeight: "700"
  },
  descGame: {
    textAlign: "justify",
    fontSize: 18
  },
  startGame: {
    width: width - 120,
    backgroundColor: "#FB3131",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20
  },
  startGameText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700"
  },
  fecharJogo: {
    color: "black",
    fontSize: 18,
    fontWeight: "700"
  },
  imageCard: {
    position: "absolute",
    width: width - 60,
    height: 140,
    objectFit: "cover"
  },
  blackout: {
    position: "absolute",
    width: width - 60,
    height: 140,
    backgroundColor: "#00000090",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2
  },
  blackouttext: {
    color: "white",
    fontSize: 18 
  },
  pointsOut: {
    flexDirection: "row",
    gap: 10,
  }
});

export default VStyles;

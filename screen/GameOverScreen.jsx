import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.txt}>The Game is Over</Text>
      <Text style={styles.txt}>Number of rounds: {props.roundNumber}</Text>
      <Text style={styles.txt}>Number was: {props.userNumber}</Text>
      <View style={styles.btn}>
        <Button title="New Game" color="black" onPress={props.onRestart} />
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 25,
    padding: "1%",
  },
  btn: {
    paddingTop: 100,
  },
});

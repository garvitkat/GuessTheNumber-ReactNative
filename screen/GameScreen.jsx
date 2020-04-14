import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import NumberContainer from "../components//NumberContainer";
import Card from "../components/Card";
const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndnum = Math.floor(Math.random() * (max - min)) + min;
  return rndnum;
};
const GameScreen = (props) => {
  const [CurrentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (CurrentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [CurrentGuess, userChoice, onGameOver]);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && CurrentGuess < props.userChoice) ||
      (direction === "greater" && CurrentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "Choose the correct option", [
        { text: "Sorry!", style: "Cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = CurrentGuess;
    } else {
      currentLow.current = CurrentGuess;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>Computer's Guess</Text>
      <NumberContainer>{CurrentGuess}</NumberContainer>
      <Card style={styles.button}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

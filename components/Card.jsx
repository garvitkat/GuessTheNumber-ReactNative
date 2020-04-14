import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    elevation: 2,
    padding: 40,
    borderColor: "black",
    borderWidth: 3,
    //backgroundColor: "",
    borderRadius: 10,
  },
});

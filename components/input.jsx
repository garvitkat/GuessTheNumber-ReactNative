import React from "react";
import { StyleSheet, TextInput } from "react-native";

const input = (props) => {
  return <TextInput {...props} style={{ ...styles.ink, ...props.style }} />;
};

export default input;

const styles = StyleSheet.create({
  ink: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

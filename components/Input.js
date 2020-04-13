import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = props => {
  // this frist         props  usefull to able add props to ure component
  return <TextInput {...props} style={{ ...styles.input, ...styles.props }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: "80%",
    borderColor: "#a9a9a9",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 4,
    // center / right / left
    textAlign: "center"
  }
});

export default Input;

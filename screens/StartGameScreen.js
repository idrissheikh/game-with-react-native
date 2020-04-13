import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {
  const [entredValue, setEntredValue] = useState("");
  const [confirmed, setConfirm] = useState(false);
  const [selectedNumber, setselectedNumber] = useState();

  const numberInputHnadler = inputText => {
    setEntredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEntredValue();
    setConfirm(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(entredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number må være  mellom 1 og 99.", [
        { text: "ok", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }
    setConfirm(true);
    setselectedNumber(chosenNumber);
    setEntredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Chosen Number: </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game </Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            blurNoSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad" //"numeric"
            maxLength={2}
            onChangeText={numberInputHnadler}
            Value={entredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.accept}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center"
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: { width: 100 },

  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});
export default StartGameScreen;

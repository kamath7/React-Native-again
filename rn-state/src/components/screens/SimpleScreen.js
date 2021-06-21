import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import ColorCounter from "../UI/ColorCounter";

const COLOR_INCREMENT_VAL = 15;

const SimpleScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const checks = (col, change) => {
    switch (col) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);

        break;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);

        break;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => checks("red", COLOR_INCREMENT_VAL)}
        onDecrease={() => checks("red", -1 * COLOR_INCREMENT_VAL)}
        color={"Red"}
      />
      <ColorCounter
        color={"Green"}
        onIncrease={() => checks("green", COLOR_INCREMENT_VAL)}
        onDecrease={() => checks("green", -1 * COLOR_INCREMENT_VAL)}
      />
      <ColorCounter
        color={"Blue"}
        onIncrease={() => checks("blue", COLOR_INCREMENT_VAL)}
        onDecrease={() => checks("blue", -1 * COLOR_INCREMENT_VAL)}
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red},${green},${blue})`,
          alignSelf: "center",
          marginVertical: 15
        }}
      />
      <Text
        style={{ textAlign: "center" }}
      >{`Your current RGB value is Red - ${red}, Green - ${green}, Blue - ${blue}`}</Text>
    </View>
  );
};

export default SimpleScreen;

const styles = StyleSheet.create({});

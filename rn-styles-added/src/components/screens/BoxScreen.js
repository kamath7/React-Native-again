import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Box Screeb</Text>
      <Text style={styles.textTwoStyle}>Box Screeb</Text>

      <Text style={styles.textThreeeStyle}>Box Screeb</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
  },
  textOneStyle: {
    borderColor: "red",
    borderWidth: 1,
    flex: 4,
  },
  textTwoStyle: {
    borderColor: "red",
    borderWidth: 1,
    flex: 4,
  },
  textThreeeStyle: {
    borderColor: "red",
    borderWidth: 1,
    flex: 2,
  },
});

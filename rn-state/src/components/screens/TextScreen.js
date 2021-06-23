import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  const [randomText, setRandomText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={"Enter some text"}
        autoCapitalize="none"
        autoCorrect={false}
        value={randomText}
        onChangeText={(newText) => setRandomText(newText)}
      />
      <Text style={{ marginVertical: 40, textAlign: "center" }}>
        Your Text is {randomText}
      </Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
});

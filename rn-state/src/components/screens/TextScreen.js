import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={{ marginVertical: 40 }}>Enter Password</Text>

      <TextInput
        style={styles.input}
        placeholder={"Enter Password"}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newText) => setPassword(newText)}
      />
      {password.length > 5 ? (
        <Text> Your password is {password}</Text>
      ) : (
        <Text style={{ color: "red" }}>Password criteria not met </Text>
      )}
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

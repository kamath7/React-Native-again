import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button onPress={()=> console.log('Button Pressed')} 
        title="Components Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#fafafa",
    textAlign: "center",
  },
});

export default HomeScreen;

import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ marginTop: 130 }}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Components Screen"
      />
      {/*  <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
        <Text>Lists Screen</Text>
  </TouchableOpacity>*/}
      <Button onPress={() => navigation.navigate("List")} title="List Screen" />
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Images Screen"
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

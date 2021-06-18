import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ marginTop: 130 }}>
      <Text style={styles.text}>HomeScreen</Text>
      <View style={{marginVertical: 18}}>
        <Button
          onPress={() => navigation.navigate("Components")}
          title="Components Screen"
        />
      </View>

      <View style={{marginVertical: 18}}>
        <Button
          onPress={() => navigation.navigate("List")}
          title="List Screen"
        />
      </View>
      <View style={{marginVertical: 18}}>
        <Button
          onPress={() => navigation.navigate("Images")}
          title="Images Screen"
        />
      </View>
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
//    {/*  <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
//       <Text>Lists Screen</Text>
// </TouchableOpacity>*/}

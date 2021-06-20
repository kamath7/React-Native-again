import React from "react";
import { StyleSheet, View, Button } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <Button title="Add Color" />
      <View style={{height:100, width: 100, backgroundColor: randomColor()}}/>
    </View>
  );
};
const randomColor = ()=>{
    const redC = Math.floor(Math.random() * 256)
    const greenC = Math.floor(Math.random() * 256)
     const blueC = Math.floor(Math.random() * 256)
     return `rgb(${redC}, ${greenC}, ${blueC} )`

}
export default ColorScreen;

const styles = StyleSheet.create({});

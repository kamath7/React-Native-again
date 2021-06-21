import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      />
      <View
        style={{ height: 100, width: 100, backgroundColor: randomColor() }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};
const randomColor = () => {
  const redC = Math.floor(Math.random() * 256);
  const greenC = Math.floor(Math.random() * 256);
  const blueC = Math.floor(Math.random() * 256);
  return `rgb(${redC}, ${greenC}, ${blueC} )`;
};
export default ColorScreen;

const styles = StyleSheet.create({});

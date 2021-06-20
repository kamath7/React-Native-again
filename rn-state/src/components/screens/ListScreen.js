import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Amarnath" , age: 25},
    { name: "Rhea" , age: 30},
    { name: "Chinmai" , age: 45},
    { name: "Nithin" , age: 19},
    { name: "Ronaldo" , age: 36},
    { name: "Rooney" , age:78},
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} {`- Age ${item.age}`}</Text>;
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    borderColor: 'black'
  },
});

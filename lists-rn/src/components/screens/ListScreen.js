import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Amarnath" },
    { name: "Rhea" },
    { name: "Chinmai" },
    { name: "Nithin" },
    { name: "Ronaldo" },
    { name: "Rooney" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

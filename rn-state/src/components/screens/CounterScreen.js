import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter1, setCounter] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1 };
        break;
      case "DECREMENT":
        return { ...state, counter: state.counter - 1 };
        break;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Button
        title="Increase Count"
        onPress={() => {
          dispatch({ type: "INCREMENT" });
        }}
      />
      <Button
        title="Decrease Count"
        onPress={() => {
          dispatch({ type: "DECREMENT" });
        }}
      />
      <Text style={{ textAlign: "center", marginVertical: 69 }}>
        Current Count: {state.counter}
      </Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});

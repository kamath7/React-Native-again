import React, { useReducer } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import ColorCounter from "../UI/ColorCounter";

const COLOR_INCREMENT_VAL = 15;
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
      break;
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
      break;
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
      break;
    default:
      return state;
  }
};
const SimpleScreen = () => {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);
  // const checks = (col, change) => {
  //   switch (col) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       break;
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);

  //       break;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);

  //       break;
  //   }
  // };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 }); //initial state also passed
  console.log(state);
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT_VAL })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT_VAL })
        }
        color={"Red"}
      />
      <ColorCounter
        color={"Green"}
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT_VAL })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT_VAL })
        }
      />
      <ColorCounter
        color={"Blue"}
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT_VAL })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT_VAL })
        }
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red},${green},${blue})`,
          alignSelf: "center",
          marginVertical: 15,
        }}
      />
      <Text
        style={{ textAlign: "center" }}
      >{`Your current RGB value is Red - ${red}, Green - ${green}, Blue - ${blue}`}</Text>
    </View>
  );
};

export default SimpleScreen;

const styles = StyleSheet.create({});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentScreen'
import CustomScreen from "./src/screens/CustomScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Custom: CustomScreen

  },
  {
    initialRouteName: "Custom",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
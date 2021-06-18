import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/components/screens/HomeScreen";
import ComponentScreen from './src/components/screens/ComponentScreen'
import CustomScreen from "./src/components/screens/CustomScreen";
import ListScreen from './src/components/screens/ListScreen';
import ImageScreen from './src/components/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Custom: CustomScreen,
    List: ListScreen,
    Images: ImageScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
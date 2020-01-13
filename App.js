import React, { Component, version } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, CardStyleInterpolators } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//screen

import MainScreen from './screens/Mainscreen';
import HomeScreen from './screens/HomeScreen';
import Profilescreen from './screens/Profilescreen';
import { View } from 'native-base';
const Welcome = createStackNavigator({
  MainScreen: {
    screen: MainScreen, navigationOptions: {
      headerShown: false
    }
  }
})
const Navigation = createMaterialBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen, navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{ fontSize: 25, color: tintColor }} name='home' />
        </View>
      )
    }
  },
  Profilescreen: {
    screen: Profilescreen, navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{ fontSize: 25, color: tintColor }} name='account-circle' />
        </View>
      )
    }
  }
}, {
  initialRouteName: 'HomeScreen',
  activeColor: '#27AE60',
  inactiveColor: '#ddd',
  barStyle: { backgroundColor: '#fff' },
})
const Main = createStackNavigator({
  // Welcome: {
  //   screen: Welcome
  // },
  Navigation: {
    screen: Navigation
  }
},
  {
    defaultNavigationOptions: {
      headerShown: false,
    }
  })


export default createAppContainer(Main) 
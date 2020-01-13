import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import Story from '../components/Story';
import Bucket from '../components/listbucket';
import { styles } from '../../assets/styler';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AppNavigator = createMaterialTopTabNavigator({
  Story: {
    screen: Story,
    navigationOptions: {

    }
  },
  Bucket: Bucket
}, {
  swipeEnabled: true,
  tabBarOptions: {
    labelStyle: {
      color: '#000',
      fontSize: 12,
    },
    style: {
      backgroundColor: '#fff',
    },
    iconStyle: {
      color: 'black'
    },
    indicatorStyle: {
      backgroundColor: '#27AE60'
    },
    showIcon: true
  }
});

export default createAppContainer(AppNavigator);  
import React, { Component } from 'react';
import { Text, Image, ImageBackground, StatusBar } from 'react-native';
import { View, Container, Content, Footer, Header, Left, Right, Body } from 'native-base';
//
import { styleHeader, styleFooter, Conteiner } from '../../assets/styler';
import { withNavigation } from 'react-navigation';
//
class List extends Component {
  render() {
    return (
      <Text>story</Text>
    )
  }
}
export default withNavigation(List);

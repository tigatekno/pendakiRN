import React, { Component } from 'react';
import { Text, Image, ImageBackground, StatusBar } from 'react-native';
import { View, Container, Content, Footer, Header, Left, Right, Body } from 'native-base';
//
import { styleHeader, styleFooter } from '../../assets/styler';
import { withNavigation } from 'react-navigation';
//
class Headerclass extends Component {
  render() {
    return (
      <Header style={styleHeader.header}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FFF" translucent={true} />
        <Left style={styleHeader.left}>
          <Image style={styleHeader.logo} source={require('../../assets/logo.png')} />
          <Text style={styleHeader.textLogo}>sAdventure</Text>
        </Left>
        <Body>
        </Body>
        <Right></Right>
      </Header>
    )
  }
}
export default withNavigation(Headerclass);

import { Text, Image, ImageBackground, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import { View, Container, Content, Footer } from 'native-base';
//
import { styles, Conteiner } from '../assets/styler';
//
class Mainscreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  render() {
    return (
      <Container>
        <ImageBackground source={require('../assets/new.jpg')} style={{ width: '100%', height: '100%' }}>
          <View style={styles.conten}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.textLogo}>sAdventure</Text>
            <View style={styles.copy}>
              <Text style={styles.textcopy}>climber</Text>
              <Text style={styles.textcopy}>adventure</Text>
              <Text style={styles.textcopy}>explorer</Text>
            </View>
            <View>
              {this.state.isLoading ? (
                <View style={styles.isloading}>
                  <ActivityIndicator color='#fff' size="large" />
                </View>
              ) : null}
            </View>
          </View>
        </ImageBackground>
      </Container>
    )
  }
}
export default Mainscreen;

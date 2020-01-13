import React, { Component, version } from 'react';
import { Text, Image, ImageBackground, StatusBar, FlatList, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { View, Container, Content, Footer, Header, Button, Input, Body } from 'native-base';
//
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { styleHome, styles, iconStyle, Cardstyle, Labelconten } from '../assets/styler';
//
import HeaderClass from './components/Header';
import FooterClass from './components/Footer';

import AppNavigator from '../screens/lib/route';
//
import { createAppContainer } from 'react-navigation'

const NavigationUser = createAppContainer(AppNavigator)


class Mainscreen extends Component {
  render() {
    return (
      <Container>
        <HeaderClass />
        <Content style={{ padding: 20 }}>
          {/* phot profile */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginRight: 20 }}>
              <Image style={{ width: 100, height: 100, borderRadius: 100 }} source={{ uri: 'http://helpiewp.com/wp-content/uploads/2017/12/user-roles-wordpress.png' }} />
              <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 17, marginTop: 12 }}>Iip Jaelani</Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <View style={{ marginRight: 30 }}>
                <Text>Postingan</Text>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>180</Text>
              </View>
              <View style={{ marginRight: 30 }}>
                <Text>Pengikut</Text>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>129</Text>
              </View>
              <View style={{ marginRight: 30 }}>
                <Text>Mengikuti</Text>
                <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>780k</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 30, }}>
            <TouchableOpacity>
              <Text style={{ borderWidth: 0.6, backgroundColor: '#eee', padding: 7, textAlign: 'center', borderRadius: 5, fontWeight: 'bold', borderColor: '#bbb' }}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: '#ddd', width: '100%', marginVertical: 20 }}></View>
          {/* end profile */}
          <View>
            <NavigationUser />
          </View>
        </Content>
        <FooterClass />
      </Container >
    )
  }
}
export default Mainscreen;


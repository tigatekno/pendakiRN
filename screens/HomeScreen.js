import React, { Component, version } from 'react';
import { Text, Image, ImageBackground, StatusBar, FlatList, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { View, Container, Content, Footer, Header, Button, Input, Body } from 'native-base';
//
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { styleHome, styles, iconStyle, Cardstyle, Labelconten } from '../assets/styler';
//
import HeaderClass from './components/Header';
import FooterClass from './components/Footer';
//

class Mainscreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: '#D2D2D2'
    }

    this.handlefavo = this.handlefavo.bind(this)
  }

  handlefavo = () => {
    this.setState = {
      color: '#FF3366'
    }

    alert(this.state.color)
  }

  render() {
    const dataAds = [
      {
        id: 1,
        image: 'https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/10/google-adwords-express-2019-1024x536.jpg',
      },
      {
        id: 2,
        image: 'https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/10/google-adwords-express-2019-1024x536.jpg',
      },
      {
        id: 3,
        image: 'https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/10/google-adwords-express-2019-1024x536.jpg',
      }
    ]
    const dataMontain = [
      {
        image: 'https://www.dw.com/image/48396304_303.jpg',
        name: 'Bromo',
        Track: 'Expert',
      },
      {
        image: 'https://www.dw.com/image/48396304_303.jpg',
        name: 'Bromo',
        Track: 'Expert',

      },
      {
        image: 'https://www.dw.com/image/48396304_303.jpg',
        name: 'Bromo',
        Track: 'Expert',

      },
      {
        image: 'https://www.dw.com/image/48396304_303.jpg',
        name: 'Bromo',
        Track: 'Expert',
        star: 'bromo'
      }
    ]
    return (
      <Container>
        <HeaderClass />
        <Content style={{ paddingHorizontal: 10 }}>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true}>
              {dataAds.map(ress => {
                return (
                  <Image source={{ uri: ress.image }} style={styleHome.ads} />
                )
              })}
            </ScrollView>
          </View>
          <Body style={{ flexDirection: 'row' }}>
            <Input style={styles.input} placeholder="Search" />
            <Icon style={iconStyle.black} name="search-web" />
          </Body>
          <View style={styleHome.content}>
            <TouchableOpacity style={styleHome.category}>
              <Icon style={styleHome.iconCategory} name='atlassian' />
              <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 10 }}>Mountain</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styleHome.category}>
              <Icon style={styleHome.iconCategory} name='beach' />
              <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 10 }}>Beach</Text>
            </TouchableOpacity>
          </View>
          {/* ---------------------------------------------- */}
          <View style={{ marginBottom: 20, padding: 10 }}>
            <Text style={Labelconten.large}>Jasa terdekat</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={Cardstyle.card}>
                <Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={require('../assets/hotel.jpg')} />
              </TouchableOpacity>
              <TouchableOpacity style={Cardstyle.card}>
                <Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={require('../assets/bus.jpg')} />
              </TouchableOpacity>
              <TouchableOpacity style={Cardstyle.card}>
                <Image resizeMode='cover' style={{ width: '100%', height: '100%' }} source={require('../assets/eat.jpg')} />
              </TouchableOpacity>
            </View>


            <Text style={Labelconten.large}>Pelayanan terdekat</Text>
            <ScrollView style={{ marginTop: 20 }} horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={Cardstyle.cardTwo}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image style={{ width: 120, height: 120 }} source={require('../assets/eat.jpg')} />
                  </View>
                  <View style={{ padding: 10 }}>
                    <Text>skhjks</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={Cardstyle.cardTwo}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image style={{ width: 120, height: 120 }} source={require('../assets/eat.jpg')} />
                  </View>
                  <View style={{ padding: 10 }}>
                    <Text>skhjks</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={Cardstyle.cardTwo}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image style={{ width: 120, height: 120 }} source={require('../assets/eat.jpg')} />
                  </View>
                  <View style={{ padding: 10 }}>
                    <Text>skhjks</Text>
                  </View>
                </View>
              </TouchableOpacity>

            </ScrollView>
          </View>


          <View>
            {dataMontain.map(ress => {
              return (
                <View style={{ marginBottom: 25 }}>
                  <TouchableOpacity style={{ borderRadius: 10 }}>
                    <ImageBackground source={{ uri: ress.image }} style={{ height: 230, marginBottom: 10, paddingTop: 130 }}>

                    </ImageBackground>
                  </TouchableOpacity>
                  <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: -90 }}>
                    <View>
                      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Bromo</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#fff', marginRight: 10 }}>Expert</Text>
                        <Icon style={{ fontSize: 20, color: '#F1C40F' }} name='star' />
                        <Text style={{ color: '#F2F2F2', marginTop: 2 }}> 51k </Text>
                      </View>
                      <Text style={{ color: '#fff' }}>54km Bintaro , tangerang selatan </Text>
                    </View>
                    <View>
                      <TouchableOpacity onPress={this.handlefavo}>
                        <Icon style={{ fontSize: 40, color: this.state.color }} name="heart" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )
            })}
          </View>
        </Content>
        <FooterClass />
      </Container >
    )
  }
}
export default Mainscreen;


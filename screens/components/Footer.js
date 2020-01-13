import React, { Component } from 'react';
import { Text, Image, ImageBackground, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { View, Container, Content, Footer, Header, FooterTab, Button } from 'native-base';
import { styleFooter } from '../../assets/styler';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { withNavigation } from 'react-navigation';

class Footerclass extends Component {
  render() {
    return (
      <Footer style={styleFooter.footer}>
        <FooterTab style={styleFooter.footer}>
          <Button>
            <Icon style={styleFooter.icon} name='home-outline' />
            <Text> Branda</Text>
          </Button>
          <Button>
            <Icon style={styleFooter.icon} name='bell-outline' />
            <Text>Time Line</Text>
          </Button>
          <Button>
            <Icon style={styleFooter.icon} name='chart-scatterplot-hexbin' />
            <Text>Rental</Text>
          </Button>
          <Button>
            <Icon style={styleFooter.icon} name='chart-line' />
            <Text>Schedule</Text>
          </Button>
          <Button>
            <Icon style={styleFooter.icon} name='account-circle' />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}
export default withNavigation(Footerclass);

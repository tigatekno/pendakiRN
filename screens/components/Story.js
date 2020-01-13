import React, { Component } from 'react';
import { Image, FlatList, TouchableOpacity } from 'react-native';
import { View } from 'native-base';
import { withNavigation } from 'react-navigation';
//
import { StoryBox } from '../../assets/styler';
class Story extends Component {
  render() {
    const dataStory = [
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
      {
        image: 'https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2013/1/logo-utk-rumah-makan-spesialis-nasi-goreng-50e69c063c0aa152c1000d7c/aa1006ec52.jpg'
      },
    ]
    return (
      <View style={StoryBox.box}>

        <FlatList
          data={dataStory}
          renderItem={({ item }) =>
            <TouchableOpacity>
              <Image style={StoryBox.image} source={{ uri: item.image }} />
            </TouchableOpacity>
          }
          keyExtractor={item => item.id}
          numColumns={3}
        />
      </View >
    )
  }
}
export default withNavigation(Story);

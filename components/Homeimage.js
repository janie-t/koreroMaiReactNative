import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Homeimage extends React.Component {
  render() {
    let pic = {
      url: 'http://www.clipartlord.com/wp-content/uploads/2014/05/kiwi5.png'
    }
    return (
      <Image source={pic} style={{width: 200, height: 200}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

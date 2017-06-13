import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homeimage from './components/Homeimage'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Kia Ora!</Text>
        <Text>Nau Mai Haere Mai</Text>
        <Homeimage />
      </View>
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

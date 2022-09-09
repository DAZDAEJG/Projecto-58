import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class WeatherScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bienvenido a la pantalla del Clima</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
});

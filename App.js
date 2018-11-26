import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

class Meucomponete extends Component{
  render(){
    return(
      <View>
      <Text>aplicativo</Text>
      <Text>leo</Text>
      </View>
      );
  }

class app3 extends Component{
  render(){
    return(
      <Meucomponete></Meucomponete>

      );
  }

AppRegistry.registerComponent('jokenpo', () => App3);

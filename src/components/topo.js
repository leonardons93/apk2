import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';
const imgs = require('../../img/j.jpg'); 
class Topo extends Component{
  render()
  {
    return(
    <View>
    <Image source={imgs} style={{width: 370, height: 200, paddingTop:20 }}/>
    </View>
    );
  }
}
export default Topo;  
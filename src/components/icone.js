import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';
const  papel = require('../../img/p.png');
const imgPd = require('../../img/pd.png'); 
const ts = require('../../img/t.png');

class Icone extends Component{
 
 render(){
  if (this.props.escolha == 'pedra') {
    return (
    <View>
     <Text>{this.props.jogador}</Text>
          <Image source={imgPd}/>
          </View>

    );
  }
    else if (this.props.escolha == 'tesoura' ){
       return (
      <View>
     <Text>{this.props.jogador}</Text>
          <Image source={ts}/>
          </View>
          );
    }
      else if ( this.props.escolha == 'papel') {
         return (
        <View>
     <Text>{this.props.jogador}</Text>
          <Image source={papel}/>
          </View>
          );
      }
        else{
          return false;
        }
 }
}
const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});
export default Icone;
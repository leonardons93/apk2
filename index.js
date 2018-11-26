import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';

import Topo from './src/components/topo'
import Icone from './src/components/icone'

class app3 extends Component{

  constructor(props){
    super(props);

    this.state = {  escolhaUsuario : '', 
                    escolhaComputador : '',
                    resultado : ''
                  };
  }

  jokenpo(escolhaUsuario){

    //gera número aleatório ( 0, 1, 2)
    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Computador ganhou';
      }
    }

    this.setState({ escolhaUsuario,escolhaComputador,resultado
                  });


  }


  render(){
    return (
 <View>

      <Topo />
        <View style={styles.palco}>
        <Text style={styles.txtResultado}>{this.state.resultado}</Text>
        <Icone escolha={this.state.escolhaComputador} jogador ='Computador' />
        <Icone escolha={this.state.escolhaUsuario} jogador ='Usuario'/>
         </View>

  <View style={styles.painel}>
      

      <View style={styles.btnEscolha}>
        <Button title="pedra" onPress={() => { this.jokenpo('pedra')}} />
        </View>
        <View style={styles.btnEscolha}>
        <Button title="papel" onPress={() => { this.jokenpo('papel')}} />
         </View>
         <View style={styles.btnEscolha}>
        <Button title="tesoura" onPress={() => { this.jokenpo('tesoura')}} />
        </View>
     
   </View>
 </View>
    );
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
AppRegistry.registerComponent('jokenpo', () => app3);
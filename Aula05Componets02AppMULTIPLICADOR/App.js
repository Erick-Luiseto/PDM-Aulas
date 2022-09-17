import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '0',
      primeironumero: '',
      segundonumero: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    if (this.state.primeironumero === '', this.state.segundonumero === ''){
      alert('Digite os valores!')
      return;
    }
    this.setState({resultado: this.state.primeironumero * this.state.segundonumero});
  }
 
  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>
          MULTIPLICADOR DE NÚMEROS
      </Text>
 
      <TextInput
      style={styles.input}
      placeholder="Digite o primeiro número"
      onChangeText={ (texto) => this.setState({primeironumero: texto})}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o segundo número"
      onChangeText={ (texto) => this.setState({segundonumero: texto})}
      />
 
      <Button title="Calcular" onPress={this.calcular} />

      <Text style={styles.resultadoTitulo}>
          RESULTADO: 
      </Text>
 
      <Text style={styles.resultado}>
          {(this.state.resultado)}
      </Text>
 
      <Text style={styles.resultado}> {this.state.nome} </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  titulo:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
    marginBottom: 30,
    color: '#FFA500'
  },

    resultadoTitulo:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
    marginBottom: 30,
    color: '#90EE90'
  },

    resultado:{
    textAlign: 'center',
    fontSize: 50,
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  }
})
 
export default App;
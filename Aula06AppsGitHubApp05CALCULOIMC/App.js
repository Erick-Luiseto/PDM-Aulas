import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      peso: 0.00,
      altura: 0.00
    };

    this.verificar = this.verificar.bind(this);
  }

  verificar(){
    imc = (this.state.peso / (this.state.altura * this.state.altura));

    if (imc <= 18.5)
      this.setState({resultado: 'Abaixo do Peso'});
    if ((imc > 18.5) && (imc <= 25))
      this.setState({resultado: 'Peso Ideal'});
    if ((imc > 25) && (imc <= 30))
      this.setState({resultado: 'Sobrepeso'});
    if ((imc > 30) && (imc <= 35))
      this.setState({resultado: 'Obesidade Grau I'});
    if ((imc > 35) && (imc <= 40))
      this.setState({resultado: 'Obesidade Grau II'});
    if (imc > 40)
      this.setState({resultado: 'Obesidade Grau III ou Mórbida'})
  }

  render(){
    return(
<View style={styles.area}>

<Text style={styles.titulo}>
          Cálculo do IMC
</Text>

<IMCImage />

<TextInput
      style={styles.input}
      placeholder="Peso (kg)"
      onChangeText={ (p) => this.setState({peso: p})}
      />

<TextInput
      style={styles.input}
      placeholder="Altura (metro e cm)"
      onChangeText={ (a) => this.setState({altura: a})}
      />

<Button title="Verificar" onPress={this.verificar} />

<Text style={styles.resultadoTitulo}>
          RESULTADO: 
</Text>

<Text style={styles.resultado}>
          {(this.state.resultado)}
</Text>

</View>
    );
  }
}

class IMCImage extends Component {
  render(){
    
    let img = 'https://papodegordo.com.br/wp-content/uploads/2010/gordos_petergriffin.jpg';
 
    return(
      <View style={{alignItems: 'center'}}>
        <Image
        source={{ uri: img }}
        style={{width: 200, height: 262}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  titulo:{
    textAlign: 'center',
    fontSize: 40,
    marginTop: 50,
    marginBottom: 40,
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
    fontSize: 30,
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
})

export default App;
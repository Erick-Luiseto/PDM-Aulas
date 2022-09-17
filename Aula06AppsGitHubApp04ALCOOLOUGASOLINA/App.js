import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      precogasolina: 0.00,
      precoalcool: 0.00
    };

    this.verificar = this.verificar.bind(this);
  }

  verificar(){
    res = this.state.precoalcool / this.state.precogasolina

    if (res < 0.7)
      this.setState({resultado: 'Álcool'});
    else
      this.setState({resultado: 'Gasolina'})
  }

  render(){
    return(
<View style={styles.area}>

<Text style={styles.titulo}>
          ÁLCOOL OU GASOLINA
</Text>

<Combustivel />

<TextInput
      style={styles.input}
      placeholder="Preço do álcool"
      onChangeText={ (texto) => this.setState({precoalcool: texto})}
      />

<TextInput
      style={styles.input}
      placeholder="Preço da gasolina"
      onChangeText={ (texto) => this.setState({precogasolina: texto})}
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

class Combustivel extends Component {
  render(){
    
    let img = 'https://images-na.ssl-images-amazon.com/images/I/61lcaZUfH9L.png';
 
    return(
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
        source={{ uri: img }}
        style={{ width: 200, height: 200}}
        />
      </View>
    )
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
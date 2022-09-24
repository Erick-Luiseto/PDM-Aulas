import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '0'
    };

    this.descobrir = this.descobrir.bind(this);
  }

  descobrir(){
      this.setState({resultado: Math.floor(Math.random() * 10)})
  }

  render(){
    return(
<View style={styles.area}>

<Text style={styles.titulo}>
          Jogo do N° Aleatório
</Text>

<IMCImage />

<Text style={styles.enunciado}>
          Pense em um n° de 0 a 10 
</Text>

<Text style={styles.resultado}>
          {(this.state.resultado)}
</Text>

<Button title="Descobrir" onPress={this.descobrir} />

</View>
    );
  }
}

class IMCImage extends Component {
  render(){
    
    let img = 'https://i.pinimg.com/236x/df/9a/38/df9a3850384ed982e07cc5660bc866ce.jpg';
 
    return(
      <View style={{alignItems: 'center'}}>
        <Image
        source={{ uri: img }}
        style={{width: 236, height: 300}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    marginTop: 50,
    marginBottom: 40,
    color: '#FFA500'
  },

    enunciado:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
    marginBottom: 30,
    color: '#90EE90'
  },

    resultado:{
    textAlign: 'center',
    fontSize: 50,
  }
})

export default App;
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pessoas: '0',
    };
    
    this.somar = this.somar.bind(this);

    this.diminuir = this.diminuir.bind(this);

    this.resetar = this.resetar.bind(this);
  }
 
  somar() {
    this.setState({pessoas: this.state.pessoas + 1})
    };


  diminuir() {
    this.setState({pessoas:this.state.pessoas - 1})
    };

  resetar() {
    this.setState({pessoas:'0'})
    };


  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>
          CONTADOR DE PESSOAS
        </Text>
 
      <Text style={styles.numeropessoas}>
          {(this.state.pessoas)}
        </Text>

 
      <Button style={styles.bottom} title="+" onPress={this.somar} />

      <Button style={styles.bottom} title="-" onPress={this.diminuir} />
      
      <Button style={styles.bottom} title="RESETAR" onPress={this.resetar} />

      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
  },

 titulo:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
    marginBottom: 30,
    color: 'blue'
  },

  numeropessoas:{
    textAlign: 'center',
    fontSize: 50,
  },

  bottom:{
    fontSize: 30,
    position: 'relative',
    Top: '20',
    marginRight: '5px',
    backgroundColor: 'green',
    borderRadius: '8%',
    color: 'white',
   }
})
 
export default App;

import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxv6ZQsdECxQpxj3LJZIX4NRRd4jtdG6JUDvCk_WhxCRh47poQDox1KvmOEpsEf5gTBg&usqp=CAU';
 
    return(
      <View>

        <Text style={{color: '#A52A2A', fontSize: 25, margin: 15}}>
        MEU PERFIL
        </Text>
        
        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 250 }} />
          
        <Text style={{ color: '#1E90FF', fontSize: 25, margin: 15 }}>
        Dados Pessoais:<br />
        </Text>
        <Text>Nome: Erick Luiseto Duarte Soares<br/></Text>
        <Text>Idade: 31 anos<br /></Text>
        <Text>Cel: 13981547643<br /></Text>
        
        <Text style={{ color: '#1E90FF', fontSize: 25, margin: 15 }}>
        Formação:<br />
        </Text>
        <Text>Cursando: Análise e Desenvolvimento de Sistemas<br /></Text>
        
        <Text style={{ color: '#1E90FF', fontSize: 25, margin: 15 }}>
        Experiência:<br />
        </Text>
        <Text>- Grupo GBE: Analista de Suporte Pleno (3 anos);<br />- CopySupply: Técnico III (1 ano);
        
        </Text><Text style={{ color: '#1E90FF', fontSize: 25, margin: 15 }}>
        Projetos:<br />
        </Text>
        <Text>- Desenvolvimento Web;<br/>- Especialização em Cybersecurity;</Text>
 
      </View>
    )
  }
}
 
export default App;
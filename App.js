import React from 'react';
import {  View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:25, marginBottom:200}}>Inovação e Projeto Integrado I</Text>
        <Button
        
          title="Dados"
          onPress={() => this.props.navigation.navigate('Details')}
          color="#FFF"         
          titleStyle={{ fontWeight: "900",  }}      
          buttonStyle={{
          backgroundColor: "rgba(92, 99,216, 1)",
          width: 300,
          height: 60,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}          
        />
        
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>
          Nome: Luiza Fortes
        </Text>
        <Text style={{fontSize:20}}>
          Matricula: 0050014555
        </Text>
        <Text style={{fontSize:20}}>
          link para o github com este código:
        </Text>
        <Text style={{fontSize:20}}>
          
           https://github.com/luizafortes/AV1-IPI   
              
        </Text>
        <Button
          title="Voltar"
          onPress={() => this.props.navigation.navigate('Home')}
          color="#FFF"
          titleStyle={{ fontWeight: "1000", fontSize:20 }}
          
          buttonStyle={{
          backgroundColor: "rgba(92, 99,216, 1)",
          width: 300,
          height: 60,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}    
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

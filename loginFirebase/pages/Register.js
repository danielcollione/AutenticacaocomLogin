import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../components/logo';
import {register} from '../providers/userProvider.js'

export default class Register extends Component {
    state={
        email: '',
        password: '',
        error: '',
        loading: false
      }

    onBottomPress = () =>{
        register(this.state.email,this.state.password).then(
            (dados)=>{
               console.log("DADOS VÀLIDOS", dados) 
            }
        ).catch((err)=>{
            console.log("ERRO", err)
        })
    }
    onLoginSuccess =  () =>{
        this.setState({
            error:'',
            loading:false
        })
    }
    

    render() {
        return (
        <View>
            <View style={stylesInput.container}>
                <TextInput 
                placeholder="e-mail" 
                style={stylesInput.input} 
                value={this.state.email}
                onChangeText={email=> this.setState({email:email})}/>
                <TextInput placeholder="senha" 
                style={stylesInput.input} 
                secureTextEntry
                value={this.state.password}
                onChangeText={password => this.setState({password:password})}/>

                <TouchableOpacity style={stylesInput.buttonContainer} onPress={this.onBottomPress}>
                <Text style={stylesInput.buttonText}>
                    Regiter
                </Text>
                </TouchableOpacity>

                <Text style={stylesInput.errorText}>
                    {this.state.error}
                </Text>
            </View>
        </View>
        )
    }
}



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
       
       
    },

    logoContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    emailAndPassword:{
        flex:2
    }
});


const stylesInput = StyleSheet.create({
    container: {
      flex: 1,
      padding:20
    },
  
    input: {
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, .5)',
      paddingLeft: 10,
      marginBottom: 15,
      borderRadius: 5,
      fontSize: 15
    },
  
    errorText: {
      fontSize: 15,
      color: '#363636',
      alignSelf: 'center',
      marginTop: 10
    },
  
    buttonText:{
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontSize:20
    },
  
    buttonContainer:{
      backgroundColor: '#00008B',
      padding: 15,
      borderRadius: 8
    }
  });
  

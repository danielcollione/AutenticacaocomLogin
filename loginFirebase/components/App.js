import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './loginform';
import Register from '../pages/Register'
import Articles from './articles';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';




class App extends Component{

    state={
      loggedIn:false
    }

    componentDidMount(){
      /*
        var firebaseConfig = {
        apiKey: "AIzaSyAJKneZ9KShZuwaYhpn-0CNOZMI--z_WZA",
        authDomain: "applogin-ba36b.firebaseapp.com",
        databaseURL: "https://applogin-ba36b.firebaseio.com",
        projectId: "applogin-ba36b",
        storageBucket: "applogin-ba36b.appspot.com",
        messagingSenderId: "204028556886",
        appId: "1:204028556886:web:5a346339ea34d970d4adf7",
        measurementId: "G-BWKTLBKR1L"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })*/
    }
    

    
    renderContent = () =>{

      switch(this.state.loggedIn){
        case false:
          return <Register/>
        
        case true:
          return <Articles/>

          
      }


    }

    



    render(){
      return (
        <View style={styles.container}>
          {this.renderContent()}
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#4682B4'
  },
});

export default App;
import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const Articles = () => {
  return (
  <View style={styles.container}>
    <View style={styles.articleContainer}>

      <Text style={styles.heading}>
        Bem-vindo a tela de autenticação.
      </Text>

      <Text style={styles.content}>
        Você está logado com o Firebase.
      </Text>

      <TouchableOpacity style={{padding:20}} onPress={() => firebase.auth().signOut()}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>

    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  articleContainer: {
    padding: 10,
  },

  heading:{
    fontSize: 22,
    color: 'black',
    marginBottom: 10
  },

  content:{
    marginTop: 10,
    fontSize: 19
  },

  logout:{
    color: '#00008B',
  }

});

export default Articles;
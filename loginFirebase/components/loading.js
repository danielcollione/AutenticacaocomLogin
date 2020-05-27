import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndication } from 'react-native';

// import { Container } from './styles';

const Loading = () => {
  return (
  <View Loading={styles.container}>
    <ActivityIndication size="large" />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
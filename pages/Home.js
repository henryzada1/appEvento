import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-Vindo(a) ao App do nosso projeto!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9900ff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    texto:{
        textAlign: 'center',
        fontSize: 15,
    }
  });
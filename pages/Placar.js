import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function Placar(){
  return (
    <View style={styles.container}>
      <ImageBackground  style={styles.imagem} source={require('../assets/Leaderboard.png')}>

      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    imagem:{
        flex:1,
        width:400,
          
    }
  });

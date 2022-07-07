import React,{ useEffect , useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Api from '../pages/Api';

export default function Evento(){

const [dadosEvento,setdadosEvento] = useState([]);

async function showEvento(){
  try{
    const resultado = await Api.get(`/evento`);
    return resultado.data
    }catch(error){
      console.log(error)
      return[]
  }
}

useEffect(async() => {
  const resp = await showEvento()
  setdadosEvento(resp);
},[]);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Principais Eventos/Notícias</Text>
      <FlatList
        data={dadosEvento}
        keyExtractor={dadosEvento => dadosEvento.id}
        renderItem={({item})=>
        <TouchableOpacity>
          <View style={styles.grupoEvento}>
              <Text style={styles.textoBotaoEvento}>{item.evento}</Text>
              <Text style={styles.textoBotaoDescricao}>{item.descricao}</Text>
          </View>
        </TouchableOpacity>
        }
          />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9900ff',
    },
    titulo:{
      fontSize:30,
      color:"#2a9d8f",
      textAlign:'center'
    },
    grupoEvento:{
      backgroundColor:'#2a9d8f',
      margin: 15,
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textoBotaoEvento:{
      fontSize:30,
      textAlign:'center'
    },
    textoBotaoDescricao:{
      fontSize:15
    }
    
  });
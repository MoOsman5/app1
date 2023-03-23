const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import { auth } from './firebase';


export default function Home({navigation}) {
  return (
    
    <View>
       <TouchableOpacity 
          onPress={()=>{
            navigation.navigate("Login")
          }}
          style={styles.t2}>
          <Text style={styles.logout}>Log out</Text>
        </TouchableOpacity>
      <Text style={styles.text}>hello {auth.currentUser?.email}</Text>
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
    logout:{
      color:'#4169e1',
      marginLeft:250
    },
    text :{
      textAlign:'center',
      marginTop: 50
    }
  });
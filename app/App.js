import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { useState } from 'react';
import { StyleSheet, Text, View,Button, ScrollView, Image } from 'react-native';

export default function App() {


  return (
    <View>

       <Image 
       style = {styles.logo}
       source = {require("./assets/logo.png")}/>
       <text>hi</text>
    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    //flexDirection:'row',
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  logo:{
height: 50,
width: 40


  }
 
  

});

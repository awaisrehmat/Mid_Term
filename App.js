import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { useState } from 'react';
import { StyleSheet, Text, View,Button, ScrollView, Image } from 'react-native';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import Home from './Components/HomeScreen';




export default function App() {

  
  return (
    
  <View>
    <Home />
  </View>
     
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  

  }
 
  

);

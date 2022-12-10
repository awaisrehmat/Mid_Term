import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { useState } from 'react';
import { StyleSheet, Text, View,Button, ScrollView, Image } from 'react-native';
import SignIn from './Components/SignIn'

export default function App() {
  return (
    <View>
        <SignIn />
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
  

  }
 
  

);

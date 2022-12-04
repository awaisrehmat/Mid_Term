import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {

  const [name, setname] = useState('Awais')

  const Press = () =>{
    setname('Awais Ali')

  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title='push me' onPress={Press}></Button>
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
});

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {

  
  const [number, setnumber] = useState(0)
  const [counter, setcounter] = useState(0)
  const [Current, setCurrent] = useState(true)

  const Press = () =>{
    // setname('Awais Ali')
    setnumber(number+5)
    setcounter(counter+1)
    setCurrent(false)
 
  }

  return (

    <View style={styles.container}>
      <View style={{flex:2,margin:10,backgroundColor:'yellow',height:'95%',width:'95%',borderColor:'black',borderRadius:20}}>
        <View style={{margin:50}}>
      <Text>{number}</Text>
      <Text>{Current ? 'Before' : 'After'}</Text>
      <Button title='push me' onPress={Press}></Button>
      <Button title='Reset' onPress= {()=>{setcounter(0),setnumber(0)}}></Button>
      <Text>Button tapped {counter} times</Text>
      <StatusBar style="auto" />
      
        </View>
      </View>
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

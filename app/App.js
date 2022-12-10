import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { useState } from 'react';
import { StyleSheet, Text, View,Button, ScrollView, YellowBox } from 'react-native';

export default function App() {

  
 
  const [Items, setItems] = useState([
    {key:1,item:'item 1'},
    {key:2,item:'item 2'},
    {key:3,item:'item 3'},
    {key:4,item:'item 4'},
    {key:5,item:'item 5'},
    {key:6,item:'item 6'},
    {key:7,item:'item 7'},
    {key:8,item:'item 8'},
    {key:9,item:'item 9'},
    
  ])



  return (
    

    <View style={styles.view2}><Text>2</Text></View>
    
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
  items:{
    margin:10,
    height:80,
    backgroundColor:'grey',
    alignItems: 'center',
    justifyContent: 'space-around',
  }

  // view1: {
  //   height:100,
  //   width:100,
  //   backgroundColor: 'grey',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // view2: {
  //   height:100,
  //   width:100,
  //   backgroundColor: 'green',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // view3: {
  //   height:100,
  //   width:100,
  //   backgroundColor: 'yellow',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

});

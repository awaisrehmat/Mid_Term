import { View, Text } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-web';


const Home = () => {

 
  return (
    <View>
      <TextInput placeholder="username" style={Styles.textBoxes}></TextInput>
    </View>
  )
}

export default Home
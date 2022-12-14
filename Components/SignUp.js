import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { useState } from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity, Image, TextInput} from 'react-native';
import  'expo-dev-client';



export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    //Android Banner: ca-app-pub-9359901491826720/3449700000
    //Android Interstitial: ca-app-pub-9359901491826720/1886703876




  return (
    <View style={styles.container}>


        
       <Image 
       style = {styles.logo}
       source = {require("../assets/logo.png")}/>
       <Text style={{marginBottom:40,fontSize:35,color:'#6D67E4'}}>
        PaperOut.com</Text>


       <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>
<TouchableOpacity>
  <Text style={styles.forgot_button}>if you already have an account then login</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.loginBtn}>
  <Text style={styles.loginText}>Register</Text>
</TouchableOpacity>
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
  logo:{
  height: 150,
  width: 100,
  },
  inputView: {
    backgroundColor: "#CFFDE1",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#7FE9DE",
  },
  
 
  

});

import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { useState } from 'react';
import { StyleSheet, Text, View,Button, ScrollView } from 'react-native';

export default function App() {

  
  // const [number, setnumber] = useState(0)
  // const [counter, setcounter] = useState(0)
  // const [Current, setCurrent] = useState(true)

  // const Press = () =>{
  //   // setname('Awais Ali')
  //   setnumber(number+5)
  //   setcounter(counter+1)
  //   setCurrent(false)
 
  //}

  const [Items, setItems] = useState([
    {key:1,item:'item 1'},
    {key:1,item:'item 2'},
    {key:1,item:'item 3'},
    {key:1,item:'item 4'},
    {key:1,item:'item 5'},
    {key:1,item:'item 6'},
    
  ])



  return (

   <ScrollView>
    
      Items.map((i) => {
        return(
          <view key={i.key}>
            <Text>{i.item}</Text>
          </view>

        )

      })


      {/* <View style={styles.view1}><Text>1</Text></View>
      <View style={styles.view2}><Text>2</Text></View>
      <View style={styles.view3}><Text>3</Text></View> */}
      {/* <View style={{flex:2,margin:10,backgroundColor:'yellow',height:'95%',width:'95%',borderColor:'black',borderRadius:20}}>
        <View style={{margin:50}}>
      <Text>{number}</Text>
      <Text>{Current ? 'Before' : 'After'}</Text>
      <Button title='push me' onPress={Press}></Button>
      <Button title='Reset' onPress= {()=>{setcounter(0),setnumber(0)}}></Button>
      <Text>Button tapped {counter} times</Text>
      <StatusBar style="auto" />
      
        </View>
      </View> */}
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'row',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

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

import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput,StyleSheet,TouchableOpacity,Image,FlatList,ImageBackground } from 'react-native';
// import { getDatabase, ref, onValue } from "firebase/database";
// import {db} from './Config'


export default function Home(){


  // const [Tafseer, setTafseer] = useState('');
  const [items, setItems] = useState([
    {
      "AyahNumber": 1,
      "Id": 1,
      "SurahNumber": 1,
      "Tafseer": "(1) عربی کے قاعدے سے \" رحمن \" کے معنی ہیں وہ ذات جس کی رحمت بہت وسیع (Extensive) ہو، یعنی اس رحمت کا فائدہ سب کو پہنچتا ہو اور \" رحیم \" کے معنی ہیں وہ ذات جس کی رحمت بہت زیادہ (Intensive) ہو، یعنی جس پر ہو مکمل طور پر ہو، اللہ تعالیٰ کی رحمت دنیا میں سب کو پہنچتی ہے، جس سے مومن کافر سب فیضیاب ہو کر رزق پاتے ہیں اور دنیا کی نعمتوں سے فائدہ اٹھاتے ہیں اور آخرت میں اگرچہ کافروں پر رحمت نہیں ہوگی ؛ لیکن جس کسی پر (یعنی مومنوں پر) ہوگی، مکمل ہوگی کہ نعمتوں کے ساتھ کسی تکلیف کا کوئی شائبہ نہیں ہوگا۔ رحمن اور رحیم کے معنی میں جو یہ فرق ہے اس کو ظاہر کرنے کے لئے رحمن کا ترجمہ سب پر مہربان اور رحیم کا ترجمہ بہت مہربان کیا گیا ہے۔",
      "TafseerName": "آسان  قران",
      "Translation": "شروع اللہ کے نام سے جو سب پر مہربان ہے، بہت مہربان ہے (1)",
      "TranslationSimple": "شروع اللہ کے نام سے جو سب پر مہربان ہے، بہت مہربان ہے"
    },
    {
      "AyahNumber": 2,
      "Id": 2,
      "SurahNumber": 1,
      "Tafseer": "(2) اگر آپ کسی عمارت کی تعریف کریں تو در حقیقت وہ اس کے بنانے والے کی تعریف ہوتی ہے، لہذا اس کائنات میں جس کسی چیز کی تعریف کی جائے وہ بالآخر اللہ تعالیٰ ہی کی تعریف ہے ؛ کیونکہ وہ چیز اسی کی بنائی ہوئی ہے، تمام جہانوں کا پروردگار کہہ کر اسی طرف اشارہ کیا گیا ہے، انسانوں کا جہان ہو یا جانوروں کا، سب کی تخلیق اور پرورش اللہ تعالیٰ ہی کا کام ہے اور ان جہانوں میں جو کوئی چیز قابل تعریف ہے وہ اللہ تعالیٰ کی تخلیق اور شان ربوبیت کی وجہ سے ہے۔",
      "TafseerName": "آسان  قران",
      "Translation": "تمام تعریفیں اللہ کی ہیں جو تمام جہانوں کا پروردگار ہے (2)",
      "TranslationSimple": "تمام تعریفیں اللہ کی ہیں جو تمام جہانوں کا پروردگار ہے"
    },
    {
      "AyahNumber": 3,
      "Id": 3,
      "SurahNumber": 1,
      "Tafseer": "",
      "TafseerName": "آسان  قران",
      "Translation": "جو سب پر مہربان ہے، بہت مہربان ہے",
      "TranslationSimple": "جو سب پر مہربان ہے، بہت مہربان ہے"
    },
    {
      "AyahNumber": 4,
      "Id": 4,
      "SurahNumber": 1,
      "Tafseer": "(3) روز جزاء کا مطلب ہے وہ دن جب تمام بندوں کو ان کے دنیا میں کیے ہوئے اعمال کا بدلہ دیا جائے گا، یوں تو روز جزاء سے پہلے بھی کائنات کی ہر چیز کا اصلی مالک اللہ تعالیٰ ہے ؛ لیکن یہاں خاص طور پر روز جزاء کے مالک ہونے کا ذکر اس لیے کیا گیا کہ دنیا میں اللہ تعالیٰ نے ہی انسانوں کو بہت سی چیزوں کا مالک بنایا ہوا ہے، یہ ملکیت اگرچہ ناقص اور عارضی ہے تاہم ظاہری صورت کے لحاظ سے ملکیت ہی ہے، لیکن قیامت کے دن جب جزاء وسزا کا مرحلہ آئے گا تو یہ ناقص اور عارضی ملکیتیں بھی ختم ہوجائیں گی، اس وقت ظاہری ملکیت بھی اللہ تعالیٰ کے سوا کسی کی نہ ہوگی۔",
      "TafseerName": "آسان  قران",
      "Translation": "جو روز جزاء کا مالک ہے (3)",
      "TranslationSimple": "جو روز جزاء کا مالک ہے"
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.AyahNumber}</Text>
      <Text>{item.Translation}</Text>
    </View>
  );

  // function readData(){
  
  // const starCountRef = ref(db, 'Id/' + postId); 
  // onValue(starCountRef, (snapshot) => {
  // const data = snapshot.val();
  // });
    
  // }
  
 
  return (
    <View style={styles.container}>

<View style={{width:'100%'}}>
     <ImageBackground style={styles.Image} source={require('../assets/Image.jpg')}>
     <Image
        source={require('../assets/backArrow.png')}
        style={{height:20,width:20,marginTop:10,marginBottom:100,marginLeft:15}}
      />

<Text style={{fontSize:25,color:'white'}}>2 Ramdan                    <Text style={{color:'red',backgroundColor:'white'}}>Youtube</Text></Text>
<Text style={{fontSize:15,color:'white'}}>Sunday, 3April 2022</Text>







<View style={styles.inputview}>
      <TextInput
    style={styles.TextInput}
    placeholder="Search"
    placeholderTextColor="#003f5c"
   
  />
  <Image
source={require('../assets/Search.png')}
style={{height:20,width:20,marginLeft:200}}

/>
      
    </View>
     </ImageBackground>
     
</View>

      
      {/* <Image
        source={require('../assets/Image.jpg')}
        style={styles.Image}
      /> */}





    
    {/* <TouchableOpacity>
    <Text>Search</Text>
    </TouchableOpacity> */}

    

<FlatList
data={items}
renderItem={renderItem}
keyExtractor={item => item.id}
ListHeaderComponent={
  <Text style={styles.header}>Read Quran</Text>
}
/>




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#F7F5EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputview: {
    backgroundColor: "#CFFDE1",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: 90,
    marginLeft:60,
    alignItems: "center",
    
  },

  Image:{

    
    height:300,
    width:'100%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
   
    marginTop:30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  

  }
 
  

);

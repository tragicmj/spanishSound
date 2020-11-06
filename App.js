import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity
} from 'react-native';
import Sound from "react-native-sound";

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
]

const App = () => {
  const playSound = (sound) => {
    const soundVar = new Sound(sound,Sound.MAIN_BUNDLE,(err)=>{
      if(err){
        console.log("Not Able to play sound");
      }
    });
    setTimeout(()=>{
      soundVar.play();
    },1000);
    soundVar.release();
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#1b262c"/>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.gridContainer}>
          {
            soundList.map((sound)=>(
                <Pressable key={sound} style={styles.box} onPress={()=>{playSound(sound)}}>
                  <Text style={styles.text}>
                    {sound}
                  </Text>
                </Pressable>
            ))
          }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#1b262c"
    },
    logo:{
      alignSelf:"center",
      marginTop:15,
    },
    gridContainer:{
      flex:1,
      marginHorizontal:5,
      marginVertical:15,
      flexDirection:"row",
      flexWrap:"wrap",
      alignItems:"flex-start",
      justifyContent:"space-around"
    },
    box:{
      height:110,
      width:"46%",
      marginVertical:6,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#0f4c75",
      shadowColor:"#393e46",
      elevation:5,
      borderRadius:5,
      shadowRadius:4,
    },
    text:{
      fontSize:50,
      color:"#ff4301"
    }
});


export default App;

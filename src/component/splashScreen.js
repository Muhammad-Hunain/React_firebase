import React from 'react'
import { View,Text,ImageBackground,StyleSheet } from "react-native";
import { useEffect } from "react";

export default function Splash({navigation}){
useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate("SignIn")
    },3000)

},[]);


    return(
        <View style={styles.container}>
<ImageBackground style={styles.img} source={require('../../assets/Splash-blood.jpg')}>
            <Text style={styles.text}>
               Blood Bank App
            </Text>
</ImageBackground>
</View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
img:{
    bottom:60,
    width:250,
    height:500,
    resizeMode:'contain', 
    alignItems:"center",
    justifyContent:"center",
  },
 text:{
    // textAlign:'center'
    top:250,
    // fontSize:35,
    fontSize:30,
    color:'red',
    fontWeight:'bold'
 } 
});
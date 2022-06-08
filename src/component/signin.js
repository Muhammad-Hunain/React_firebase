
import { StyleSheet, Text, View,ImageBackground, TextInput,TouchableOpacity,} from 'react-native';
import React, {useState} from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

// import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
export default function SignIn(props) {
 const [email,setEmail] = useState();
 const [password,setPassword] = useState();
const navigation  = useNavigation();
const [message,setMessage] = useState("");

 const handleLogin = async () =>{
  try{
  const isUserLogin = await auth().signInWithEmailAndPassword(email,password);
  console.log(isUserLogin);
  navigation.navigate('Home',{
    email:isUserLogin.user.email,
    // name:isUserLogin.user.name,
    uid:isUserLogin.user.uid,
  })
 }
 catch(err){
  setMessage(err.message)   
 }
}; 

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={{uri: "https://static.vecteezy.com/system/resources/previews/003/652/904/large_2x/creative-flat-lay-of-travel-vacation-spring-or-summer-tropical-fashion-top-view-beach-accessories-on-pastel-pink-color-background-with-blank-space-for-text-top-view-copy-spacegraphy-photo.jpg"}}>
       <Text style={styles.text}>Log In</Text>
         <TextInput style={styles.textfield} placeholder="Enter Email"
             value={email} 
            onChangeText={(e)=>setEmail(e)}
            />
        <TextInput style={styles.textfield} placeholder="Password"
             value={password} 
            onChangeText={(e)=>setPassword(e)}
            secureTextEntry={true}
            />
          <View style={styles.btnGroup}>            
            <TouchableOpacity style={styles.btn} onPress={()=>handleLogin()}>
             <Text style={styles.text1}>Sign In</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("SignUp")}}>
             <Text style={styles.text1}>Create Account</Text>
           </TouchableOpacity>
         </View>
           <Text>
              {message}
            </Text>

      </ImageBackground>
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
  img:{
    width:500,
    height:740,
    resizeMode:'contain', 
    alignItems:"center",
    justifyContent:"center",
  },
  textfield:{
    padding:10,
    margin:20,
    borderWidth:3,
    width:200,
    borderRadius:10
  },
  text:{
    fontSize:30,
    marginBottom:20
  },
  btn:{
    borderColor:"#fff",
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    marginTop:20,
    marginLeft:20,
    borderWidth:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text1:{
    fontWeight:'800',
    color:'#fff'
  },
  btnGroup:{
      flexDirection:'row'
  }
});


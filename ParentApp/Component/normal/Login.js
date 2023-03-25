import React from "react";
import { useState,useContext ,useEffect} from "react";

import { View,Text ,StyleSheet,Image,TextInput,TouchableOpacity,ActivityIndicator} from "react-native";

import axios from "axios";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../Context/Context";
import Toast from "react-native-toast-message";
const Login=({navigation})=>
{
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const [show,setShow]=useState(false);
  const {loginHandler,isLogin,isLoding}=useContext(AuthContext);


  const showToast = (type,header,msg="") => {
   
    Toast.show({
      type: type,
      text1: header,
      text2: msg
    });
  }
  
useEffect(()=>
{
    isLogin(navigation)
},[])
  const changePassword=()=>
  {
      navigation.navigate("changePassword");
  }
  const logo=require("../img3.png");
  return (
    <View style={style.main_container}>
      <ActivityIndicator size={50} color={"#1377c0"} animating={show}/>
    <View style={style.Logo_container}>

     <Image source={logo} style={style.image}/>
    </View>
    <View style={style.Info_container}>
     <TextInput
     placeholder="Username"
     style={style.text_input}
     value={username}
     caretHidden={false}
     onChangeText={(text)=>setUserName(text)}
     />
     <TextInput
     placeholder="Password"
     style={style.text_input}
     value={password}
     caretHidden={false}
     secureTextEntry={true}
     onChangeText={(text)=>setPassword(text)}
     />
    </View>
    <View style={style.btn}>
      <TouchableOpacity style={style.button} onPress={()=>loginHandler(username,password,navigation,setUserName,setPassword,showToast)}>
        <Text style={style.text}>Log In</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={changePassword}>
        <Text style={{
          color:"black",
          fontSize:17
        }}>Change password</Text>
      </TouchableOpacity>
   <Toast/>
</View>
  );
}
export default Login;
const style=StyleSheet.create({
  main_container:{
      height:"100%",
      width:"100%",
      // backgroundColor:"lightgreen",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"white",
      rowGap:20


  },
 Logo_container:{
  height:100,
  width:"80%",
  borderRadius:9,

  display:"flex",
  alignItems:"center",
  justifyContent:"center"
  

  
 },
 Info_container:{
  height:200,
  width:"80%",
  borderRadius:9,
borderBottomColor:"black",
display:"flex",
 rowGap:20,
 display:"flex",
 justifyContent:"center",
 alignIgtem:"center",

 

 },
 image:{
  height:55,
  width:"95%",
  padding:20,


 },
 btn:{
     height:60,
     width:"80%",
     borderRadius:9,
     fontSize:20,
     padding:10,
  
     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     



    
 },
 text_input:{
  height:70,
  width:"100%",
  borderRadius:9,
  fontSize:15,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 9,
  padding: 10,
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
  

 },
button:{
  height:50,
  width:"100%",
  backgroundColor:"#1377c0",
  borderRadius:9,
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  
  
 
},
text:{
fontSize:25,
color:"white",
fontWeight:500


}


})
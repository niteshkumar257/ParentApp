import React ,{createContext,useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const  AuthContext =createContext();
import jwt_decode from "jwt-decode";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Toast from 'react-native-toast-message';

export const AuthProvider=({children})=>
{
    const [test,setTest]=useState("Hello");
    const [isLoding,setIsLoding]=useState(false);
    const [userToken,setUserToken]=useState(null);
    const [isLogoShow,setLogoShow]=useState(false);
    const [userInfo,setUserInfo]=useState("");
  

    const showToast = (type,header,msg="") => {
   
      Toast.show({
        type: type,
        text1: header,
        text2: msg
      });
    }
    const loginHandler= async(username,password,navigation,setPassword,setUserName,showToast,setShow)=>
    {
     
      
          if(username && password)
          {
            setShow(true);
              setIsLoding(true);
               axios.post('https://school-management-api.azurewebsites.net/parent/login',{
                username:username,
                password:password
               }).then((res)=>
               {
                console.log(res.data);
            setUserToken(res.data.token);
            AsyncStorage.setItem('userToken',res.data.token);
            setUserName("");
            setPassword("");
            setIsLoding(false);
            setShow(false);
            navigation.navigate('children');
            
                
               }).catch((err)=>
               {
                console.log(err);
                setIsLoding(false);
                setUserName("");
                setPassword("");
                setShow(false);
                navigation.navigate('notfound');
               


               })
          }
          else showToast("error","All Fields are Required")
  }
  
  
    const logoutHandler=(navigation)=>
    {

        if(userToken!=null)
        {
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoding(false);
        }
      if(userToken==null)
        navigation.navigate("login");

        
    }
    const isLogin= async(navigation)=>
    {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if(value) {
                
                console.log(value);
               setUserToken(value);
              navigation.navigate("children");
              
            
            } else {
              navigation.navigate("login");
              console.log('No data found');
            }
          } catch(e) {
            
            console.log(e);
          }

    }

   return (
    <AuthContext.Provider value={{loginHandler,logoutHandler,userToken,isLogin,isLoding}}>
        {children}
      
    </AuthContext.Provider>
   )
}
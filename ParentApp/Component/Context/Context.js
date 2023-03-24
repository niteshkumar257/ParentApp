import React ,{createContext,useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const  AuthContext =createContext();
import axios from 'axios';

export const AuthProvider=({children})=>
{
    const [test,setTest]=useState("Hello");
    const [isLoding,setIsLoding]=useState(true);
    const [userToken,setUserToken]=useState(null);

    const login=(userName,password)=>
    {
           
        console.warn("funtion called");
         if(userName && password)
         {
            setIsLoding(true);
            axios.post(`https://school-management-api.azurewebsites.net/parent/login`,{
                username:userName,
                password:password
            }).then((res)=>
            {
                console.log(res.data);
            }).catch((err)=>
            {
                console.log(err);
            })

         }
    }
    const logout=()=>
    {
        setUserToken(null);
        AsyncStorage.removeItem(userToken);
        setIsLoding(false);
    }
    const isLogin= async(email,password)=>
    {
        try{
            setIsLoding(true);
        let Usertokne=AsyncStorage.getItem('userToken');
        setUserToken(userToken);
        setIsLoding(false);

          
        } catch(e)
        {
            console.log("login error")
        }

    }
useEffect(()=>
{
    isLogin();
})
   return (
    <AuthContext.Provider value={{login,logout}}>
        {children}
    </AuthContext.Provider>
   )
}
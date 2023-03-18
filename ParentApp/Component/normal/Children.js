import { View, Text,StyleSheet,TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import Student from './Student';

import Headers from './header';
import Toast from 'react-native-toast-message';
import axios from "axios";


const Children = ({navigation}) => {

const [children,setChildren]=useState([]);

useEffect(()=>
{
   axios.get('https://school-management-api.azurewebsites.net/parents/11/getChildren')
   .then((res)=>
   {
    
    setChildren(res.data.allChildren);
    console.log(children);
   }).catch((err)=>
   {
    console.log(err);
   })
},[])

  
 
  const showToast = (type,header,msg="") => {
   
    Toast.show({
      type: type,
      text1: header,
      text2: msg
    });
  }

  
 
    
  return (
    <View style={styles.mainContainer}>
          <Headers navigation={navigation}/>
        <View style={styles.ChildrenListContainer}>
        
 {
     children.map((item,index)=>
     (
        <Student    key={item.child_id} name={item.child_name}  child_id={item.child_id}
           navigation={navigation}
          />
     ))
 }
 

    
     
    </View>
    <Toast/>
    </View>
   
  );
}
const styles=StyleSheet.create(

    {
      mainContainer:{
        width:"100%",
        height:"100%",
         display:"flex",
         backgroundColor:"white"
         
         
         

      },
        ChildrenListContainer:{
            height:"80%",
            width:"100%",
            display:"flex",
           justifyContent:"center",
           rowGap:50,
           alignItems:"center",
         
         
        



        },
        container:{
          height:140,
          width:140,
          display:"flex",
          flexDirection:"row",
          columnGap:20,
          justifyContent:"center",
          alignItems:"center",
         
        
        },
        subContainer:{
          display:"flex",
          flexDirection:"column",
          alignItems:"center"

        },
        infoContainer:{
          width:200,
          display:"flex",
          flexDirection:"row",
          justifyContent:"flex-start",
          alignContent:"center",
          columnGap:10,
         
          paddingLeft:10
        

        },
        text:{
         fontSize:13,
         fontWeight:500,
         color:"black",
         textAlign:"center",
        
        }
        
    }
)

export default Children;

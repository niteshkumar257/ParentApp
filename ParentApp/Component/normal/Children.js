import { View, Text,StyleSheet,TextInput } from 'react-native'
import React,{useEffect} from 'react'
import Student from './Student';

import Headers from './header';
import Toast from 'react-native-toast-message';

const Children = ({navigation}) => {


  const studentDetails=[
    {
        name:"Nitesh",Class:"11th",medium:"English",board:"CBSE"
    },
    {
      name:"Swayam",Class:"12th",medium:"Hindi",board:"ICSE"
  }
  ]
 
  const showToast = (type,header,msg="") => {
   
    Toast.show({
      type: type,
      text1: header,
      text2: msg
    });
  }
//  useEffect(()=>
//   {
//       showToast("success","Hi","Welcome back")
//   },[])
  
 
    
  return (
    <View style={styles.mainContainer}>
          <Headers navigation={navigation}/>
        <View style={styles.ChildrenListContainer}>
        
 {
     studentDetails.map((item,index)=>
     (
        <Student key={index} name={item.name} board={item.board} medium={item.medium}
           Class={item.Class}
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

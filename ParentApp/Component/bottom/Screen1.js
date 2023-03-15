import { View, Text ,StyleSheet,ScrollView,FlatList,Image} from 'react-native'
import React ,{useEffect,useState} from 'react'



const Screen1 = () => {
 const logo=require("../../assets/curriculum.png")
  return (
    <View style={styles.container}> 
     <Image style={styles.Image} source={logo}/>
  </View>
  )
}
const styles=StyleSheet.create(
  {
    container:{
      height:"100%",
      width:"100%",
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"white",
       padding:20,
       gap:30,
    },
    text:{
      fontSize:20,
      color:"black",
      fontWeight:600
    },
    contentBox:{
      height:200,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      
      borderWidth:1,
      borderColor:"black",
    
    



    },
    title:{
      height:40,
      width:"100%",
      padding:20,
      margin:10,
      backgroundColor:"grey"
      

    },
    body:{
      minHeight:100,
      width:"100%",
      padding:20,
      margin:10,
      backgroundColor:"lightgrey"

    },
    Image:

    {
      height:300,
      width:"98%",
      padding:20
    }

  }
)
export default Screen1
import { View, Text ,StyleSheet,ScrollView,FlatList} from 'react-native'
import React ,{useEffect,useState} from 'react'


const Screen1 = () => {

  return (
    <View style={styles.container}> 
    <Text style={styles.text}>Curriculum</Text>
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

    }
  }
)
export default Screen1
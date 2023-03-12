import { View, Text ,StyleSheet,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import Mentor from './Mentor';
const Screen4 = () => {
  return (
    <ScrollView>
         <View style={styles.container}>
          <View style={styles.heading}>
          <Text style={styles.text}>Available Mentors</Text>
          </View>
         
       <Mentor/>
       <Mentor/>
       <Mentor/>
       <Mentor/>
       <Mentor/>
       <Mentor/>
       <Mentor/>
      
      
       
    </View>
    </ScrollView>
     
    
   
  )
}
const styles=StyleSheet.create(
  {
    container:{
      height:"100%",
      width:"100%",
       display:"flex",
       backgroundColor:"white",
       alignItems:"center",
       padding:10,
       rowGap:20
    },
    heading:{
      display:"flex",
      width:"100%",
      padding:10,
      justifyContent:'flex-start'
    },
    text:{
      fontSize:25,
      color:"black"
    }
  }
)

export default Screen4
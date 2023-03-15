import { View, Text ,StyleSheet,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import Mentor from './Mentor';

const Screen4 = () => {
  return (
    <ScrollView>
         <View style={styles.container}>
         
       <Mentor name={"MB sharma"}  
       qualification={"MSc in Physics"}
        exp={"Academics"}
        details={"28 years experience in education system along with great command in Physics .he was district resource person to train Govt lecture from Ajij Premji Foundation ,Wipro" }
        />
          <Mentor name={"R sharma"}  
       qualification={"MSc in Physics"}
        exp={"Academics"}
        details={"20 years experience in education system along with great command in Physics .he was district resource person to train Govt lecture from Ratan Taata foundation ,TCS"}
        />
         <Mentor name={"AK sharma"}  
       qualification={"MSc in Physics"}
        exp={"Academics"}
        details={"20 years experience in education system along with great command in Physics .he was district resource person to train Govt lecture from Ratan Taata foundation ,TCS"}
        />
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
     
       alignItems:"center",
       padding:10,
       rowGap:20,
       backgroundColor:"#ebecec",
    
    },
    heading:{
      display:"flex",
      width:"100%",
      padding:10,
      justifyContent:'flex-start'
    },
    text:{
      fontSize:25,
      color:"black",
      lineHeight:40,
      fontWeight:600
   
     
    }
  }
)

export default Screen4
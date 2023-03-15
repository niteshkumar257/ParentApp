import { View, Text,StyleSheet ,Button,ScrollView} from 'react-native'
import React from 'react'
import Fee from "./Fee";




const Screen2 = () => {
  return(
  <ScrollView>
    <View style={styles.container}>
       <Text style={styles.header}>Fee Studetails</Text>
      <Fee nthInstallMent={"1st"} status={"Paid"} amount={"12,399"} date={"23/2/12"}/>
      <Fee nthInstallMent={"2nd"} status={"Un_Paid"} amount={"34,000"} date={"23/2/12"}/>
      <Fee nthInstallMent={"3rd"} status={"Paid"} amount={"35,890"} date={"23/2/12"}/>
     
    
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
       flexDirection:"column",
       rowGap:10,
      padding:10,
      
    },
    header:{
      fontSize:25,
      fontWeight:500,
      color:"black",
      marginBottom:30
    }
  }
)
export default Screen2
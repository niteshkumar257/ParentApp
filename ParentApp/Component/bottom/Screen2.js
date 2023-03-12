import { View, Text,StyleSheet ,Button,ScrollView} from 'react-native'
import React from 'react'
import Fee from "./Fee";




const Screen2 = () => {
  return(
  <ScrollView>
    <View style={styles.container}>
      <View>
        <Text style={{
          fontSize:20,
          color:"black"
        }}>Fee Details</Text>
      </View>
      <Fee nthInstallMent={"First"} status={"Paid"} amount={12399} date={"23/2/12"}/>
      <Fee nthInstallMent={"Second"} status={"UnPaid"} amount={34000} date={"23/2/12"}/>
      <Fee nthInstallMent={"Third"} status={"UnPaid"} amount={35890} date={"23/2/12"}/>

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
       rowGap:20,
      padding:10,
       backgroundColor:"white"
    },
  }
)
export default Screen2
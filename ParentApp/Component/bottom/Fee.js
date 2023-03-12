import { View, Text ,StyleSheet,Button} from 'react-native'
import React from 'react'

const Fee = ({nthInstallMent,status,amount,date}) => {
  return (
    <View >
     <View style={styles.feeContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.keyText}>InstallMent No :</Text>
          <Text style={styles.valueText}>{nthInstallMent}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.keyText}>Status :</Text>
          {
            status==="Paid" ? <Text style={[styles.valueText,styles.PaidStatus]}>{status}</Text> :
            <Text style={[styles.valueText,styles.UnpaidStatus]}>{status}</Text>}
          </View>
        <View style={styles.infoContainer}>
          <Text style={styles.keyText}>Amount :</Text>
          <Text style={styles.valueText}>{amount}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.keyText}>Date :</Text>
          <Text style={styles.valueText}>{date}</Text>
        </View>
        <View style={styles.paidButton}>
       {status==="UnPaid" && <Button title='Pay Now' color="#1377c0"/>}
          </View>
      </View>
    </View>
  )
}

export default Fee
const styles=StyleSheet.create(
    {
      container:{
        height:"100%",
        width:"100%",
         display:"flex",
        padding:10,
         backgroundColor:"white"
      },
      text:{
        fontSize:30,
        color:"black"
      },
      feeContainer:{
        display:"flex",
        width:"98%",
        flexDirection:"column",
        rowGap:10,
        padding:10,
        borderWidth:0.35,
        borderColor:"grey",
        borderRadius:9
  
      },
      infoContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        columnGap:20
      
  
  
      },
      keyText:{
     fontSize:15,
     fontWeight:500
  
      },
      valueText:{
        fontSize:18,
        fontWeight:500,
        color:"black"
  
      },
      PaidStatus:{
          color:"green"
      },
      UnpaidStatus:{
        color:"red"
  
      }
    }
  )
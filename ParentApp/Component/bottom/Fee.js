import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

const Fee = ({nthInstallMent,status,amount,date,totalFees}) => {
  
  return (
    <View  style={styles.mainContainer}>
      <Text>{totalFees}</Text>
          <View style={[styles.LeftContainer,status==="Paid"?styles.paid:styles.unpaid]}>
              <Text  style={styles.text}>
               {nthInstallMent}
              </Text>
          </View>
          <View style={styles.RightContainer}>
            <View style={styles.amountContainer}>
              <Text style={{
                  fontSize:20,
                  fontWeight:600,
                  color:"black"
              }}>{amount}</Text>
              <Text style={[status==="Paid"?styles.paidText:styles.unpaidText]} >{status==="Paid"?"Paid":"Un_Paid"}</Text>
              
            </View>
           
            <View style={styles.dateContainer}>
              <Text style={[styles.keyText]}>Last Date</Text>
              <Text style={[styles.valueText]}>{date}</Text>
            
            </View>
            {
              status==="Paid" && 
              <View style={styles.dateContainer}>
              <Text style={[styles.keyText]}>Paid Date</Text>
              <Text style={[styles.valueText]}>{date}</Text>
            
            </View>
             }
           

          </View>
    </View>
  )
}

export default Fee;
const styles=StyleSheet.create(
  { 
    mainContainer:{
      height:120,
      width:"100%",
     flex:1,
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center",
     columnGap:5,
     borderRadius:9,
   
     width: '100%',
     backgroundColor: 'white',
     elevation: 5,
     shadowColor: '#000',
     shadowOffset: {width: 0, height: 0},
     shadowOpacity: 0.1,
     shadowRadius: 5,
     padding:10
   
     
    },
    LeftContainer:{
      height:120,
    
      flex:1,
       justifyContent:"center",
       alignItems:"center",
      borderRadius:9,
      backgroundColor: 'white',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 5,
     

    },
    paid:{
     backgroundColor:"#42ba96",
      // backgroundColor:"green"
    
    },
    unpaid:{
      backgroundColor:"#ff3333"
    },
    text:{
      fontSize:20,
      fontWeight:600,
      color:"white"
      

    },
    RightContainer:{
    minHeight:120,
      height:"auto",
     paddingTop:10,
      flex:4,
      display:"flex",
      flexDirection:"column",
      rowGap:5,
  justifyContent:"space-evenly",
  alignItems:"center",
  backgroundColor:"white",
  paddingBottom:10,
 
    
   
      borderRadius:9
    },
    dateContainer:{
      height:45,
    
   display:"flex",
      flexDirection:"row",
    
      padding:5,
      width:"95%",
      justifyContent:"space-between",
      alignItems:"center"

    },
    amountContainer:{

      height:45,
      padding:5,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
     
      width:"95%"

    },
    keyText:{
      fontSize:15,
      color:"black",
      fontWeight:500
    },
    valueText:{
      fontSize:15,
      color:"black"
    },
    paidText:{
    fontSize:20,
    fontWeight:500,
    color:"#42ba96"
    },
    unpaidText:{
      fontSize:20,
      fontWeight:500,
      color:"#ff3333"

    }
  }
)

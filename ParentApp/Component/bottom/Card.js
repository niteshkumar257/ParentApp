import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Card = ({subject,obtaindMark,totalMark}) => {
  return (
    <View>
      <View style={styles.CardContainer}>
        <Text style={styles.text}>{subject}</Text>
        <Text style={styles.text}>{obtaindMark}</Text>
        <Text style={styles.text}>{totalMark}</Text>
      </View>
    </View>
  )
}

export default Card;
const styles=StyleSheet.create(
    {
          CardContainer:{
            width:"100%",
            padding:10,
            display:"flex",
            height:40,
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
          columnGap:30,
            backgroundColor:"white",
            borderRadius:9
          },
          text:{
            fontSize:15,
            color:"black",
            fontWeight:600
            
          }
    }
)
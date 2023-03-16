import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NotificationCard from './NotificationCard'
const feeIcon=require("../../assets/notificationFee.png")
const Peformance=require("../../assets/PeformanceReport.png");
const mentor=require("../../assets/presentation.png")

const Notification = () => {
  return (
    <View style={styles.mainContainer} >
     <NotificationCard icon={feeIcon} msg={"First Insallement due date"}/>
     <NotificationCard icon={Peformance} msg={"Monthly Peformance Report"}/>
     <NotificationCard icon={mentor} msg={"Mentor meeting is Scheduled on 12/3/23"} />
    
    </View>
  )
}

export default Notification;
const styles=StyleSheet.create(
    {
        mainContainer:{
            display:"flex",
            alignItems:"center",
            height:"100%",
            width:"100%",
            marginTop:10,
            rowGap:20,
          
          
        
        }
    }
)

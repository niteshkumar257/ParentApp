import { View, Text, StyleSheet ,ScrollView} from 'react-native'
import React, {useEffect,useState} from 'react'
import AcitvityHandler from '../bottom/AcitvityHandler'

import NotificationCard from './NotificationCard'
const feeIcon=require("../../assets/notificationFee.png")
const Peformance=require("../../assets/PeformanceReport.png");
const mentor=require("../../assets/presentation.png")
import axios from "axios";

const Notification = () => {
  const [notificationList,setNotificatinList]=useState([]);
  const [isLoding,setIsLodiging]=useState(true);
  const [error,setError]=useState(false);
   const getNotification=()=>
   {
    axios.get("https://school-management-api.azurewebsites.net/parents/11/getNotification")
    .then((res)=>
    {
      console.log(res.data.messages);
      setIsLodiging(false);
      setNotificatinList(res.data.messages);
    }).catch((err)=>
    {
      setIsLodiging(false);
      setError(true);
      console.log(err)
    })
   }
   useEffect(()=>
   {
     getNotification();
   },[])
   console.log(notificationList.length)
  return (

    <ScrollView>
      {
        isLoding  ? <AcitvityHandler show={isLoding}/> :
         <View style={styles.mainContainer} >
      {

        notificationList.length===0 ? <Text >No notifcations ?</Text> :
        notificationList.map((item,index)=>(
          <NotificationCard  key={index} icon={feeIcon} msg={item.messages}/>

        ))
      }
    
    
    
    </View>
}

    </ScrollView>
   
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

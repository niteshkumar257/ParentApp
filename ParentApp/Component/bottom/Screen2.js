import { View, Text,StyleSheet ,Button,ScrollView} from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import Fee from "./Fee";
import axios from 'axios';
import AcitvityHandler from './AcitvityHandler';
import DataContext from '../Context/DataContext';





const Screen2 = ({navigation}) => {

  const {id}=useContext(DataContext);
  const [childId,setChildId]=useState(id);

 const [first,setFirst]=useState(0);
 const [second,setSecond]=useState(0);
 const [thrid,setThird]=useState(0);
 const [firstSatus,setFirstStatus]=useState(false);
 const [secondSatus,setSecondStatus]=useState(false);
 const [thridSatus,setThridStatus]=useState(false);
 const [date1,setDate1]=useState("");
 const [date2,setDate2]=useState("");
 const [date3,setDate3]=useState("");
 const [showActivity,setShowsActivity]=useState(true);
  useEffect(()=>
  {
    console.log("fee",childId);
     axios.get(`https://school-management-api.azurewebsites.net/students/${childId}/fees`).then((res)=>
     {
      console.log(res.data.studentFees);
      console.log(res.data.studentFees[0].first_installment);
       setFirst(res.data.studentFees[0].first_installment);
       setSecond(res.data.studentFees[0].second_installment);
       setThird(res.data.studentFees[0].third_installment);
       setFirstStatus(res.data.studentFees[0].first_installment_status);
       setSecondStatus(res.data.studentFees[0].second_installment_status);
       setThridStatus(res.data.studentFees[0].third_installment_status);
       setDate1(res.data.studentFees[0].first_installment_eta.slice(0, 10));
       setDate2(res.data.studentFees[0].second_installment_eta.slice(0,10));
       setDate3(res.data.studentFees[0].third_installment_eta.slice(0,10));
       setShowsActivity(false);

     }).catch((err)=>
     {
      setShowsActivity(false);
      navigation.navigate("notfound");
      console.log(err);
     })
  },[])
  return(
  <ScrollView>
    {
     
      showActivity ? <AcitvityHandler show={showActivity}/> :
    
    <View style={styles.container}>
     
      <Fee nthInstallMent={"1st"} status={firstSatus} amount={first} date={date1}/>
      <Fee nthInstallMent={"2nd"} status={secondSatus} amount={second} date={date2}/>
      <Fee nthInstallMent={"3rd"} status={thridSatus} amount={thrid} date={date3}/>
     </View>

}
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
       rowGap:30,
      padding:10,
      paddingTop:20,
      color:"white"
      
      
    },
    header:{
      fontSize:20,
      fontWeight:500,
      color:"black",
      marginBottom:10
    }
  }
)
export default Screen2
import { View, Text ,StyleSheet,SafeAreaView,ScrollView} from 'react-native'
import React ,{useEffect,useState,useContext} from 'react'
import Mentor from './Mentor';
import axios from "axios";
import AcitvityHandler from './AcitvityHandler';
import { AuthContext } from '../Context/Context';
import jwtDecode from 'jwt-decode';


const Screen4 = ({navigation}) => {
  const [MentorDetails,setMentorDetails]=useState([]);
  const [mentorScheduleStatus,setMentorScheduleStatus]=useState(false);
  const [requestArray,setRequestArray]=useState([]);
  const [scheduleArray,setScheduleArray]=useState([]);
  const [isLoding,setIsLoding]=useState(true);
  const {userToken}=useContext(AuthContext);
  let userInfo=jwtDecode(userToken);
  let parentId=(userInfo.result.parent_id);
  

  
  const getMentors=()=>
  {
     axios.get("https://school-management-api.azurewebsites.net/mentors")
     .then((res)=>{
      console.log(res.data.mentors);
      let mentor=res.data.mentors;
      mentor.forEach(element => {
           element.check=false;
      });
      console.log(mentor);
      setMentorDetails(mentor);
      setIsLoding(false)
     }).catch((err)=>
     {
      navigation.navigate("notfound");
      console.log(err)
     })
  }

  const mentorScheduleInfoHandler=()=>
  {
    console.warn("called");
     let a=requestArray?.length;
     let b=scheduleArray?.length;
    console.log("before mentor details",MentorDetails)
     for(let i=0;i<a;i++) 
     {
     
      (MentorDetails[i].check=true);
     } 
     console.log("After mentor",MentorDetails);
    
  
  setMentorDetails(MentorDetails)
    


  }
  const getScheduleDetails=()=>
{

  console.warn("get ScheduleDetails funtion is called")
  axios.get(`https://school-management-api.azurewebsites.net/parents/${parentId}/getSchedule`).then((res)=>
  {
      console.log(res.data.schedules);
      setRequestArray(res.data.schedules[0]?.request_date);
      setScheduleArray(res.data.schedules[0]?.schedule_date);
     
      if(res.data.schedules.length!=0)
      {
         let requestLength=res.data.schedules[0].request_date;
         let scheduleLength=res.data.schedules[0].schedule_date;
         if(requestLength==null) requestLength=0;
         else requestLength=requestLength.length;
         if(scheduleLength==null) scheduleLength=0;
        else  scheduleLength=0;
        console.log(requestLength,scheduleLength);
        if(requestLength!=scheduleLength)
        {
           console.log("hello");
        setMentorScheduleStatus(true);
        console.log("disable");
        }
         
      }
      else console.log("lenght is zeros");
      mentorScheduleInfoHandler();
   
  }).catch((err)=>
  {
    console.log(err);
  })
}


  useEffect(()=>
  {
    getMentors();
  
      
    
  },[])
  return (
    <ScrollView>
      {
        isLoding  ? <AcitvityHandler show={isLoding}/> :
      
         <View style={styles.container}>
         
      { MentorDetails && 
        MentorDetails.map((item,index)=>(
          <Mentor key={item.mentor_id
          } name={item.mentor_name} 
            mentor_id={item.mentor_id}
            mentorScheduleStatus={mentorScheduleStatus}
            getScheduleDetails={getScheduleDetails}
            check={item.check}
          qualification={"MSc in Physics"}
           exp={"Academics"}
           details={"28 years experience in education system along with great command in Physics .he was district resource person to train Govt lecture from Ajij Premji Foundation ,Wipro" }
           />
        ))
      }
       
       
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
     
       alignItems:"center",
       padding:10,
       rowGap:20,
       backgroundColor:"#ebecec",
       backgroundColor:"white"
    
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
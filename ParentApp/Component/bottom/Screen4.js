import { View, Text ,StyleSheet,SafeAreaView,ScrollView} from 'react-native'
import React ,{useEffect,useState} from 'react'
import Mentor from './Mentor';
import axios from "axios";
import AcitvityHandler from './AcitvityHandler';


const Screen4 = () => {
  const [MentorDetails,setMentorDetails]=useState([]);
  const [isLoding,setIsLoding]=useState(true);
  const getMentors=()=>
  {
     axios.get("https://school-management-api.azurewebsites.net/mentors")
     .then((res)=>{
      console.log(res.data.mentors);
      setMentorDetails(res.data.mentors);
      setIsLoding(false)
     }).catch((err)=>
     {
      console.log(err)
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
          <Mentor key={item.mentor_id} name={item.mentor_name}  
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
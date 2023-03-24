import { View, Text ,StyleSheet} from 'react-native'
import React ,{useState} from 'react'
import Icons from "react-native-vector-icons/Ionicons"; 

const VideoCard = ({subjectVideoList,name}) => {
  const [dropDownToggle,setDropDownToggle]=useState(true);
  const toggleDropDown=()=>
  {
    
    setDropDownToggle(!dropDownToggle);
  }
  return (
    <View style={styles.Container}>
       <View style={styles.contentContainer}> 
        <Text style={styles.subjectTitle}>{name}</Text>
        {
          dropDownToggle ?  <Icons onPress={toggleDropDown} name="caret-down-outline" size={25} color={"white"}/>
        :
       <Icons onPress={toggleDropDown} name="caret-up-outline" size={25} color={"white"}/>
        }
       </View>
       {
        !dropDownToggle &&   <View style={styles.subjectListContainer}>
          <View style={styles.ChapterContainer}>
            <Text style={styles.subjectText}>Motion</Text>
             <Icons name="videocam-outline" size={25} color={"black"}/>
          </View>
          <View style={styles.ChapterContainer}>
            <Text  style={styles.subjectText}>Kinematics</Text>
             <Icons name="videocam-outline" size={25} color={"black"}/>
          </View>
          <View style={styles.ChapterContainer}>
            <Text  style={styles.subjectText}>Rotation</Text>
             <Icons name="videocam-outline" size={25} color={"black"}/>
          </View>
      </View>
       }
      
    </View>
  )
}

export default VideoCard;

const styles=StyleSheet.create(
  {
      Container:{
       display:"flex",
        flexDirection:"column",
        rowGap:10,
     
        height:"auto",
    
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderRadius:9,
        backgroundColor:"#1377c0"

       
      },
      contentContainer:{

        display:"flex",
        flexDirection:"row",
        height:"auto",
        
         justifyContent:"space-between",
         padding:10,
        
         borderRadius:9
      }
      ,subjectListContainer:{
        display:"flex",
         flexDirection:"column",
         rowGap:10,
         padding:10,
      },
      ChapterContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white",
        borderRadius:9,
        padding:10,
      },
      subjectText:{
        fontWeight:500,
        color:"black"
      },
      subjectTitle:{
        fontSize:20,
         color:"white",
        fontWeight:600,
        
        
      }

  }
)
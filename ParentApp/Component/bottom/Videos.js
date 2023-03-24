import { View, Text,StyleSheet,ScrollView } from 'react-native'
import VideoCard from './VideoCard'
import React from 'react'

const Video = () => {
  const subjectVideoList=[
    {
      subjectName:"Physics",
      chapter:[
        "Motions","Rotation","Work Energy","Power","Current electricity"
      ]
    },
    {
      subjectName:"Mathematics",
      chapter:[
        "Algebara","Differentitation","Sequence and Series","Intergration","Hyperbola"
      ]
    }
  ]
  return (
<ScrollView>
<View style={styles.videoContainer}>
       <VideoCard subjectVideoList={subjectVideoList} name={"Physics"}/>
       <VideoCard subjectVideoList={subjectVideoList} name={"Mathematics"}/>
       <VideoCard subjectVideoList={subjectVideoList} name={"Chemistry"}/>
       <VideoCard subjectVideoList={subjectVideoList} name={"Biology"}/>
     
      
    </View>
</ScrollView>
   
  )
}

export default Video;
const styles=StyleSheet.create(
  {
      videoContainer:{
      
        flex:1,
        flexDirection:"column",
        rowGap:10,
        borderRadius:9,
        paddingTop:20,
        padding:10
    
        
      }

  }
)

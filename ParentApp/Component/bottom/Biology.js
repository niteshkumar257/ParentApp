import { View, Text ,ScrollView,StyleSheet} from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import VideoList from './VideoList'
import { create } from 'react-test-renderer'

const Biology = ({navigation,route}) => {
    console.log("route",route);
    const {name,subject_name,playList_Id}=route.params;
    console.log(name,subject_name,playList_Id)
   
    const [videoList, setVideoList] = useState(null);
    const [showActivity, setShowActitvity] = useState(false);
    const [url, setUrl] = useState("");
    const getVideoList = () => {
        setShowActitvity(true);
        const options = {
          method: 'GET',
          url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
          params: {
            playlistId:playList_Id,
            part: 'snippet',
            maxResults: '50'
          },
          headers: {
            'X-RapidAPI-Key': '5e3f97fa53msh82d042b85e64364p14f4adjsn766a04c950c7',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
        };
    
        axios.request(options).then(function (response) {
          console.log(response.data);
          setVideoList(response.data.items);
          setShowActitvity(false);
        }).catch(function (error) {
          console.error(error);
        });
      }
    
      useEffect(() => {
        getVideoList();
    
      }, []);
    useEffect(() => {
        navigation.setOptions({ title:subject_name,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#1377c0' },
           })
           getVideoList();
        
    }, []);
  return (
    <ScrollView overScrollMode='never'>
        <View style={styles.videoContainer}>
        {
          !showActivity && videoList?.map((item) =>
          (
            <VideoList key={item.id} title={item.snippet.title} image={item.snippet.thumbnails.medium.url} height={item.snippet.thumbnails.medium.height}
              width={item.snippet.thumbnails.medium.width} videoId={item.snippet.resourceId.videoId}
            />
          ))
        }
        </View>
       
    </ScrollView>
  )
}

export default Biology;
const styles=StyleSheet.create({
     videoContainer:{
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        rowGap:20,
        paddingTop:30
     }
})
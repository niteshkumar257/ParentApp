import { View, Text,StyleSheet ,TextInput} from 'react-native'
import React from 'react'
import Parent from "../../assets/Parent.svg";
import Icon from "react-native-vector-icons/Ionicons";


const header = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.leftContainer}>
      <View style={styles.profile}  onStartShouldSetResponder={()=>
      {
        navigation.navigate("parentProfile");
      }}>
        <Parent height={25} width={25} />
      </View>
      <View style={styles.messager}>
        <Text style={styles.text}> 
       Rama Chandra
        </Text>
       
      </View>
      </View>
      <View 
      onStartShouldSetResponder={()=>
        {
          navigation.navigate("notification");
        }}
       style={styles.rightContainer}>
       <Icon name="notifications-outline" size={30} color={"black"}/>
      </View>
      
    </View>
   
  )
}

export default header;
const styles=StyleSheet.create(
  {
     container:{
      height:60,
      width:"100%",
      borderWidth:1,
      borderRightWidth:0,
      borderLeftWidth:0,
      borderTopWidth:0,
      borderColor:"lightgrey",
    
      display:"flex",
      flexDirection:"row",
     
      alignItems:"center",
      padding:10
     },
     leftContainer:{
      flex:1,
    
     columnGap:30,
      display:"flex",
      flexDirection:"row",
    
      alignItems:"center"
      

     },
     rightContainer:{
      flex:1,
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-end"
        
      

     },
     text:{
      fontSize:15,
      fontWeight:500,
      color:"black"
     }

  }
)

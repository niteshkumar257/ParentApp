import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import StudentImage from "../../assets/Student.svg";

const Student = ({navigation,name,Class,medium,board}) => {

   const clickHandler =()=>
   {
      navigation.navigate("home");
   }
  return (
    <View  onStartShouldSetResponder={clickHandler} style={styles.container}>
 
    <StudentImage  height={100} width={100}/>
  
    <View  style={styles.subContainer}>
     
    <View style={styles.infoContainer}>
         <Text>Name</Text>
         <Text  style={styles.text}>{name}</Text>
      </View>
      <View style={styles.infoContainer}>
         <Text>Class</Text>
         <Text  style={styles.text}>{Class}</Text>
      </View>
      <View style={styles.infoContainer}>
         <Text>Medium</Text>
         <Text  style={styles.text}>{medium}</Text>
      </View>
      <View style={styles.infoContainer}>
         <Text>Board</Text>
         <Text  style={styles.text}>{board}</Text>
      </View>
  
    </View>
   
</View>


  )
}

export default Student
const styles=StyleSheet.create(

   {
     mainContainer:{
       width:"100%",
       height:"100%",
        display:"flex",
        backgroundColor:"white"
        
        
        

     },
       ChildrenListContainer:{
           height:"80%",
           width:"100%",
           display:"flex",
          justifyContent:"center",
          rowGap:50,
          alignItems:"center",
        
        
       



       },
       container:{
         height:140,
         width:140,
         display:"flex",
         flexDirection:"row",
         columnGap:20,
         justifyContent:"center",
         alignItems:"center",
        
       
       },
       subContainer:{
         display:"flex",
         flexDirection:"column",
         alignItems:"center"

       },
       infoContainer:{
         width:200,
         display:"flex",
         flexDirection:"row",
         justifyContent:"flex-start",
         alignContent:"center",
         columnGap:10,
        
         paddingLeft:10
       

       },
       text:{
        fontSize:13,
        fontWeight:500,
        color:"black",
        textAlign:"center",
       
       }
       
   }
)
import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import StudentImage from "../../assets/male.svg";
import StudentImage2 from "../../assets/female.svg";

const Student = ({navigation,name,child_id}) => {
  console.log(name,child_id)


   const clickHandler =(id)=>
   {
      
      navigation.navigate("home",
      {
         child_id:id,
         child_name:name
      });
   }
  return (
    <View  onStartShouldSetResponder={()=>clickHandler(child_id)} style={styles.container}>
 
  <StudentImage  height={130} width={130}/> 
  
  
    <View  style={styles.subContainer}>
     
    <View style={styles.infoContainer}>
         <Text style={styles.text}>Name:</Text>
         <Text  style={styles.text}>{name}</Text>
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
        backgroundColor:"white",
       
       
        
        
        

     },
       ChildrenListContainer:{
           height:"80%",
           width:"100%",
           display:"flex",
          justifyContent:"center",
          rowGap:10,
          alignItems:"center",
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.1,
          shadowRadius: 5,
        
        
        
       



       },
       container:{
         height:140,
         width:140,
         display:"flex",
         flexDirection:"row",
         columnGap:40,
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
      
         paddingLeft:10,
      
       

       },
       text:{
        fontSize:18,
        fontWeight:600,
        color:"black",
        textAlign:"center",
        lineHeight:25,
        letterSpacing:1.3
       
       }
       
   }
)
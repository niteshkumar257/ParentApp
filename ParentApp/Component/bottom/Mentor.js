import { View, Text,StyleSheet,Image ,Button} from 'react-native'
import React from 'react'
const mentor=require("../../assets/mentor.png")




const Mentor = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
         <Image source={mentor} />
        </View>
        <View style={styles.InfoContainer}>
          <View style={styles.InfoSubContainer}>
          <Text style={styles.keyText}>Name :</Text>
          <Text style={styles.valueText}>Khirodh Kumar</Text>
          </View>
          <View style={styles.InfoSubContainer}>
          <Text style={styles.keyText}>Qualification :</Text>
          <Text style={styles.valueText}>B.Tech</Text>
          </View>
          <View style={styles.InfoSubContainer}>
          <Text style={styles.keyText}>Expericence :</Text>
          <Text style={styles.valueText}>
               12 years
             </Text>
          </View>
         
        
        </View>
      </View>
      <View style={styles.requestContainer}>
           <View style={styles.subRequestContainer}>
          
              
             
              <Text style={styles.valueText}>Request for a mentor </Text>
             
              <Button title="Schedule" color="#1377c0"/>
    </View>
           </View>
           <Text style={{ height:.6,width:"100%",backgroundColor:"grey",margin:0}}></Text>
         
      </View>
   
  )
}

export default Mentor;
const styles=StyleSheet.create(
  {
   main_container:{
      width:"100%",
      height:"auto",
      display:"flex",
      flexDirection:"column",
      rowGap:10,
     alignItems:"center",
     paddingBottom:10,
     paddingTop:20,

   
   },
   container:{
    width:"100%",
    height:"auto",
    borderWidth:1,
    borderColor:"black",
    borderRadius:5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    columnGap:30,
    paddingLeft:5,
    paddingRight:5

   },
   profileContainer:{
     height:80,
     flex:1,
   
     display:"flex",
     justifyContent:"center",
     alignItems:"center"
       
   },
   InfoContainer:{
    height:"auto",
    flex:4,
 
    display:"flex",
    
  
    alignItems:"center"

  },
  InfoSubContainer:{
    display:"flex",
    width:"98%",
    flexDirection:"row",
    columnGap:20,
    padding:4,
    flexShrink:1,
    flexWrap:"wrap"
   
 

  },keyText:{
    fontSize:15,
    fontWeight:400,
    
  },
  valueText:{
    fontSize:18,
  fontWeight:500,
  color:"black"
  },
  requestContainer:{
  height:"auto",
  width:"100%",
  },
  subRequestContainer:{
    
       display:"flex",
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center", 
       justifyContent:"space-between",
       padding:5
  }
  }
)
import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Logout from 'react-native-vector-icons/AntDesign';

const parent= require("../../assets/mother.png");
const Parentsprofile = ({navigation}) => {
    const logOutHandler = () => {
        navigation.navigate("login");
      }
  return (
    <View style={styles.main_container}>
         <View style={styles.top}>
           <View style={[styles.image]}>
            <Image source={parent} style={styles.img}/>
           </View>
           <View style={[styles.info]}>
            <View style={styles.heading}>
                <Text style={{
                    fontSize:20,
                    fontWeight:500,
                    color:"black"
                    
                }}>Basic Info</Text>
            </View>
            <View style={styles.infoBox}>
            <Text>Name</Text>
            <Text style={styles.text}>Nitesh Kumar Reddy</Text>
            </View>

            <View style={styles.infoBox}>
            <Text>Email</Text>
            <Text style={styles.text}>niteshreddy257@gmail.com</Text>
            </View>

            <View style={styles.infoBox}>
            <Text>Phone Number</Text>
            <Text style={styles.text}>8249829096</Text>
            </View>

            <View style={styles.infoBox}>
            <Text>Alternate Number</Text>
            <Text style={styles.text}>977823863</Text>
            </View>
          
           </View>
         </View>
         <View style={styles.bottom}>

         <View style={styles.logoutContainer}>
          <View style={styles.boxContainer}>
            <Icon name="settings-outline" size={20} color={"black"} />
            <Text style={styles.text}>Settings</Text>
          </View>
          <View onStartShouldSetResponder={logOutHandler} style={[styles.boxContainer]}>

            <Logout name="logout" size={20} color={"black"} />


            <Text style={styles.text} >Logout</Text>
          </View>

        </View>  
         </View>
    </View>
  )
}

export default Parentsprofile
const styles=StyleSheet.create(
    {
        main_container:{

            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            rowGap:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"white"
            
        },
        top:{
           
            width:"100%",
          
            borderRadius:9,
            display:"flex",
            flexDirection:"row",
        columnGap:10,
            
        },
        image:{
            flex:1,
            // borderWidth:1,
            // borderColor:"black",
            borderRadius:6,
            display:"flex",
            alignItems:"center"
          

        },
        img:{
        marginTop:40

        },
        info:{
           flex:2,
        //    borderWidth:1,
        //    borderColor:"black",
           borderRadius:6,
           padding:5,
           display:"flex",
           rowGap:20,
           paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
   
        },
        
        infoBox:
        {
            display:"flex",
            flexDirection:"row",
            columnGap:10
        },
        bottom:
        {
            width:"100%",
              height:140,
              
          
             borderRadius:9
        },
        logoutContainer: {

            width: "100%",
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItem:"center",
            paddingLeft:10,
            paddingRight:10,
         
            rowGap:20,
            
      
      
          },
          boxContainer: {
            display: "flex",
        width:"100%",
            flexDirection: "row",
            padding: 2,
            justifyContent: "flex-start",
            alignItems: "center",
            columnGap: 20,
            borderWidth:.75,
            borderRadius:6,
            borderColor:"lightgrey",
            paddingLeft:30,
            height:50
      
      
      
      
          },
        text:{
          fontSize:15,
          fontWeight:500,
          color:"black"
        },
        shadowProp: {  
            shadowOffset: {width: -2, height: 4},  
            shadowColor: 'black',  
            shadowOpacity: 0.2,  
            shadowRadius: 3,  
          }, 
          elevation: {
            elevation: 2,
        
            shadowColor: 'grey',
          }, 
        
    }
)
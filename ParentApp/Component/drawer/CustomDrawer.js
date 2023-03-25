import { View, Text,StyleSheet,SafeAreaView,Image } from 'react-native';
import React,{useContext} from 'react';
import CommonCard from '../common/CommonCard';
import User from "../../assets/user.svg";

import User1 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Student from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Parent from "../../assets/Parent2.svg";
import { AuthContext } from "../Context/Context";

const student=require("../../assets/Student.png");








const CustomDrawer = ({ navigation,child_name }) => {

  // const logOutHandler = () => {
  //   navigation.navigate("login");
  // }
  console.log(child_name);
  const childrenHandler = () => {
    navigation.navigate("children");
  }
  const {logoutHandler}=useContext(AuthContext);
  console.log(logoutHandler);
  return (
    <SafeAreaView >
      <View style={styles.mainContainer}>
        <View style={styles.profileContainer}>
        <Image source={student}  style={{
          height:50,
          width:50
        }}/>
           <View>
          
             
            <Text style={styles.text}>{child_name}</Text>
          
           </View>
         
        </View>
        <View style={styles.listContainer}>

        <View onStartShouldSetResponder={childrenHandler} style={styles.ListItemContainer}>
           <AntDesign name="user" size={20} color={"black"}/>
          <Text style={styles.text}>Childrens</Text>
        </View>
        </View>
        <View style={styles.logOutMainContainer}>
        <View style={styles.logoutContainer}>
          <View style={styles.boxContainer}>
            <Icon name="settings-outline" size={20} color={"black"} />
            <Text style={styles.text}>Settings</Text>
          </View>
          <View onStartShouldSetResponder={()=>logoutHandler(navigation)} style={styles.boxContainer}>

            <AntDesign name="logout" size={20} color={"black"} />


            <Text style={styles.text} >Logout</Text>
          </View>

        </View>
        </View>
        
      </View>



    </SafeAreaView>
  );
};

const styles = StyleSheet.create(
  {
    mainContainer: {
      height: "100%",
      width: "100%",
      display: "flex",

      justifyContent: "space-between",
      alignItems: "center",

    },

    profileContainer: {
      width: "100%",
      display: "flex",
      height: 150,
     flex:1.75,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderWidth: .5,
      borderColor: "lightgrey",
      borderLeftWidth: 0,
      borderRightWidth: 0



    },
    subProfileContainer:{
      display:"flex",
      flexDirection:"row",
     
      alignItems:"center",
      columnGap:5
      

    },
    listContainer:{
      flex:3,
      width:"80%",
      marginTop:20
     

    },
    ListItemContainer:{
      
      display: "flex",

      flexDirection: "row",
      padding: 2,
      justifyContent: "flex-start",
      alignItems: "center",
      columnGap: 20,
      
      

    },
    logOutMainContainer:{
       width:"100%",
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
      
       flex:2,
       borderWidth:1,
      borderColor:"lightgrey",
      borderBottomWidth:0,
      borderRightWidth:0,
      borderLeftWidth:0,
    },
    logoutContainer: {

      width: "80%",
      height: 150,
      display: "flex",
      justifyContent: "center",
   
      rowGap: 10,
      


    },
    boxContainer: {
      display: "flex",

      flexDirection: "row",
      padding: 2,
      justifyContent: "flex-start",
      alignItems: "center",
      columnGap: 20,




    },

    text: {
      fontSize: 20,
      color: "black"
    },
    subtext:{

    }

  }
)
export default CustomDrawer;

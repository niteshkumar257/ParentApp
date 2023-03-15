import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React,{useState,useCallback} from 'react'
const mentor = require("../../assets/presentation.png")




const Mentor = ({ name, qualification, exp, details }) => {

  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
}

const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=1); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
},[]);
  return (
    <View style={styles.main_container}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.profileContainer}>
            <Image source={mentor} />
          </View>
          <View style={styles.InfoContainer}>
            <View style={styles.InfoSubContainer}>
              <Text style={styles.keyText}>Name</Text>
              <View style={styles.valueContainer}>
              <Text style={styles.valueText}>{name}</Text>
              </View>
           
            </View>
            <View style={styles.InfoSubContainer}>
              <Text style={styles.keyText}>Qualification</Text>
              <View style={styles.valueContainer}>
              <Text style={styles.valueText}>{qualification}</Text>
              </View>
            
            </View>
            <View style={styles.InfoSubContainer}>
              <Text style={styles.keyText}>Expericence</Text>
              <View style={styles.valueContainer}>
              <Text style={styles.valueText}>{exp}</Text>
              </View>
            
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
         <Text style={styles.keyText}>Details</Text>
          <Text

              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 1}
              style={styles.detailText}>{details}</Text>

              {
                  lengthMore ? <Text
                  onPress={toggleNumberOfLines}
                  style={{ lineHeight: 20, marginTop: 10 ,color:"black"}}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                  :null
              }

        </View>
      </View>
      <View style={styles.requestContainer}>
        <View style={styles.subRequestContainer}>

<View>
<Text style={styles.valueText}>Request for a mentor </Text>
</View>

         
<View>
<TouchableOpacity style={styles.button}>
        <Text style={{color:"white",fontWeight:500}}>SCHEDULE</Text>
      </TouchableOpacity>
</View>
    
        </View>
      </View>
    

    </View>

  )
}

export default Mentor;
const styles = StyleSheet.create(
  {
    main_container: {
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      rowGap:2,
      alignItems: "center",
     
     padding:5,
    backgroundColor:"white",
      borderRadius: 9,
   
   
    


    },
    container: {
      width: "98%",
      height: "auto",
 
      borderRadius: 9,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      columnGap:30,
      paddingTop:5,
      paddingBottom:5,
      paddingLeft: 7,
      paddingRight:5,
     
     
      

    },
    topContainer:{
      width: "100%",
      height: "auto",
    
    
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      columnGap: 30,
      paddingLeft: 5,
      paddingRight: 5,
    

    },
    bottomContainer:{
      width:"100%",
      height:"auto",
      marginBottom:10,
      padding:3,
    
    

    },
    profileContainer: {
      height: 80,
      flex: 1,

      display: "flex",
      justifyContent: "center",
      alignItems: "center"

    },
    InfoContainer: {
      height: "auto",
      flex: 4,

      display: "flex",


      alignItems: "center"

    },
    InfoSubContainer: {
      display: "flex",
    
      alignItem:"center",
      width: "98%",
      flexDirection: "row",
      columnGap: 20,
      padding: 4,
      flexShrink: 1,
      flexWrap: "wrap"


  
    },
    valueContainer:{
      display:"flex",
      justifyContent:"flex-start",
      flex:1,
     


    },
     keyText: {
      fontSize: 15,
      fontWeight: 400,
      flex:0.61,
      color:"#000"

    },
    valueText: {
      color:"black",
      fontSize:15,
      columnGap:100,
      lineHeight:22,
     letterSpacing:1,
     fontWeight:500,
    },
    requestContainer: {
      height: "auto",
      width: "100%",
    },
    detailText:{
      color:"#000",
      fontSize:15,
      columnGap:100,
      lineHeight:22,
     letterSpacing:1
      
     

    },
    subRequestContainer: {

      display: "flex",
      flexDirection: "row",
     
      alignItems: "center",
      justifyContent: "space-between",
      padding: 5,
     
    },
    button:{
      height:30,
      width:100,
      flex:1,
      fontSize:15,
      justifyContent:"center",
      alignItems:"center",
    backgroundColor:"#1377c0",
    color:"white",
    borderRadius:9
    

    }
   
  }
)
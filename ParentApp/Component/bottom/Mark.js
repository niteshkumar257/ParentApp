import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
const Mark = ({id,data,testId,testDate}) => {
    console.log(data);
  return (
    <View style={styles.markContainer}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Id : {testId}</Text>
            <Text style={styles.headerText}>Date :{testDate}</Text>
        </View>
        <View style={styles.rowData}>
            {
                data.map((item,index)=>(
                    <Card subject={item.subjectName} obtaindMark={item.obtained_mark} totalMark={item.total_marks}/>
                ))
            }
           
          
        </View>
    </View>
  )
}
 
export default Mark

const styles = StyleSheet.create({
    markContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start",
        height:"auto",
        backgroundColor: '#1377c0',
        elevation: 5,
        shadowColor: '#000',
        width:"100%",
        padding:10,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderRadius:9,
        rowGap:10

    },
    header:{
          height:"auto",
          display:"flex",
          flexDirection:"row",
         width:"100%",
         justifyContent:"space-around",
         
          borderRadius:9,
          paddingBottom:5,
          paddingtop:5,
         
          alignItems:"center",
       

    },
    headerText:{
       fontSize:20,
       fontWeight:500,
       height:40,
       color:"white",
      
       lineHeight:40,
       textAlign:"center",
     

      
    },
    rowData:{
        display:"flex",
        width:"100%",
        flexDirection:"column",
        rowGap:10,
        justifyContent:"flex-start",
        alignItems:"center",
        
        padding:10

    }
})
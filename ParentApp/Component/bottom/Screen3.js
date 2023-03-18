import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React ,{useEffect} from 'react'
import Chart from './Chart'
import DataTable from "./DataTable"
import LineChart from './LineChart';
import Chart1 from "./ScrolableChart";
import Graph from './Graph';
import axios from 'axios';

const Screen3 = () => {
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableContainer}>
       
      {/* <DataTable/> */}
        </View>
  
       

        <View style={styles.chartContainer}>
        
        <Chart type={"bezier"} color1={"#54f6d2"} color2={"#affae9"} subject={"Physics"}/>
        <Chart type={"bezier"} color1={"#d1e2f5"} color2={"#affae9"} subject={"Mathematics"}/>
        <Chart type={"bezier"} color1={"#d1e2f5"} color2={"#affae9"} subject={"Biology"}/>
         <Graph/>
       <Chart1/>
        
        </View>

      </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create(
  {
    container: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"white"

    },
    tableContainer: {
      width: "100%",
      padding: 10,
      display: "flex",
      flexDirection: "column",
      rowGap:20,
      backgroundColor:"white"


    },
    chartContainer: {
      width:"100%",
      padding: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      alignItems:"center",
      rowGap: 35,




    },
    subjectTitle:{
      fontSize:15,
      fontWeight:500,
      color:"black"

    },
    text: {
      fontSize: 20,
      color: "black"
    }
  }
)

export default Screen3
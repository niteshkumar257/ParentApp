import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Chart from './Chart'
import DataTable from "./DataTable"
import LineChart from './LineChart';
import Chart1 from "./ScrolableChart";
import Graph from './Graph';

const Screen3 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableContainer}>
        <Text style={styles.text}>Peformance Table</Text>
      {/* <DataTable/> */}
        </View>
  
       

        <View style={styles.chartContainer}>
        
        <Chart type={"bezier"} color1={"#54f6d2"} color2={"#affae9"}/>
        <Chart type={"bezier"} color1={"#d1e2f5"} color2={"#affae9"}/>
         <Graph/>
         <LineChart/>
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
      width: "100%",
      padding: 5,
      display: "flex",
      flexDirection: "column",
      rowGap: 10




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
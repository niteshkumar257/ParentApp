import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Chart from './Chart'
import Table from "./Table";

const Screen3 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableContainer}>
          <Text style={styles.text}>Performance Table</Text>
         
          <View>
            <Text style={styles.subjectTitle}>Physics</Text>
          <Chart />
          </View>
          <View>
            <Text style={styles.subjectTitle}>Chemistry</Text>
          <Chart />
          </View>
          <View>
            <Text style={styles.subjectTitle}>Mathematics</Text>
          <Chart />
          </View>
        </View>

        <View style={styles.chartContainer}>
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
      backgroundColor: "white",

    },
    tableContainer: {
      width: "100%",
      padding: 10,
      display: "flex",
      flexDirection: "column",
      rowGap:20


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
import { View, Text, StyleSheet, ScrollView,TouchableOpacity ,ActivityIndicator} from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import Chart from './Chart'

import axios from 'axios';

import { AuthContext } from '../Context/Context';

import Mark from './Mark';
import DataContext from '../Context/DataContext';

import AcitvityHandler from './AcitvityHandler';


const Screen3 = () => {
  const { id } = useContext(DataContext);
  const [childId, setChildId] = useState(id);
  const [testFetchStatus,setTestFetchStatus]=useState(false);
  const [testDetails, setTestDetails] = useState([]);
  const [tableTestDetails, setTableTestDetails] = useState([]);
  const [toggleGraphShow,setToggleGraphShow]=useState(false);
  const [fetchDataStatus,setFetchDataStatus]=useState(false);



  const graphShowToggleHandler=()=>
  {
      setToggleGraphShow(true);
  }
  const { test } = useContext(AuthContext);
  let dataList = [];
  const dataConvert = (markList) => {
    dataList = markList?.reduce((acc, test) => {
      test.subject_name.forEach((subject, index) => {
        const markInfo = {
          x: new Date(test.test_date).getMonth() + 1,
          y: test.mark_obtained[index],
          meta: test.total_marks[index],
        };
        const subjectIndex = acc.findIndex(item => item.subjectName === subject);
        if (subjectIndex === -1) {
          acc.push({ subjectName: subject, markInfo: [markInfo] });
        } else {
          acc[subjectIndex].markInfo.push(markInfo);
        }
      });
      return acc;
    }, []);

    dataList?.map((data) => {
      data.markInfo.sort((a, b) => a.x - b.x);
    })

    return dataList;


  }

  const tableDataConverter = (markList) => {
    const tableList = markList?.map((mark) => ({
      test_id: mark.test_id,
      test_date: new Date(mark.test_date).toISOString().substr(0, 10),
      subjectMarkList: mark.subject_name.map((subject, i) => ({
        subjectName: subject,
        obtained_mark: mark.mark_obtained[i],
        total_marks: mark.total_marks[i],
      })),
    }));
    return tableList;
  }
  const getTestDetails = () => {
    setTestFetchStatus(true);
    axios.get(`https://school-management-api.azurewebsites.net/students/${childId}/performance`)
      .then((res) => {
        
        setTestDetails(dataConvert(res.data.allmarksDetail));
        setTableTestDetails(tableDataConverter(res.data.allmarksDetail)); 
        setTestFetchStatus(false);
        setFetchDataStatus(true);
          
         })
        .catch((err) => {
        console.log(err);
      
      })
  }
  useEffect(() => {
    
    getTestDetails();
  }, [])
  
  
  return (
    <ScrollView overScrollMode="never" removeClippedSubviews={true}>
        
    
      <View style={styles.container}>
       {  testFetchStatus ?  <AcitvityHandler show={testFetchStatus}/>:
        <View style={styles.tableContainer}>

          {tableTestDetails?.map((item, index) =>
            (
              <Mark key={item.test_id} data={item.subjectMarkList} testId={item.test_id}
                testDate={item.test_date}/>
            )
            )
          }
        </View>
}
{
     !toggleGraphShow && fetchDataStatus &&  <TouchableOpacity style={styles.showGraphButton} onPress={graphShowToggleHandler}>
          <Text style={styles.graphButtonText}>Show graphical analysis</Text>
        </TouchableOpacity>}
{
     toggleGraphShow &&  !testFetchStatus &&   <View style={styles.chartContainer}>
          {
            testDetails?.map((item, index) =>
            (
              <Chart key={index} data={item} type={"bezier"} color1={"#2BC0E4"} color2={"#affae9"} subject={item.subjectName} />
            ))
          }

        </View>}

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
      paddingBottom:30

    },
    tableContainer: {
      width: "100%",
      padding: 10,
      display: "flex",
      flexDirection: "column",
      rowGap: 10,
      backgroundColor: "white"


    },
    chartContainer: {
      width: "100%",
      padding: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      rowGap: 35,




    },
    subjectTitle: {
      fontSize: 15,
      fontWeight: 500,
      color: "black"

    },
    text: {
      fontSize: 20,
      color: "black"
    },
    showGraphButton:{
        width:'95%',
        backgroundColor:"green",
        height:40,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:9
    },
    graphButtonText:{
      fontSize:15,
      fontWeight:500,
      color:"white"

    }
  }
)

export default Screen3
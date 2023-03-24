import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React ,{useEffect,useState,useContext} from 'react'
import Chart from './Chart'
import DataTable from "./DataTable"
import LineChart from './LineChart';
import ScrolableChart from "./ScrolableChart";
import Graph from './Graph';
import BarGraph from "./BarGraph";
import axios from 'axios';
import CharttWrapper from './CharttWrapper';
import { AuthContext } from '../Context/Context';
import { Wrapper } from 'victory-core';
import Mark from './Mark';


const Screen3 = () => {
 
  const [testDetails,setTestDetails]=useState([]);
  const [tableTestDetails,setTableTestDetails]=useState([]);
   const {test}=useContext(AuthContext);
let dataList=[];
   const dataConvert=(markList)=>
{
 dataList = markList.reduce((acc, test) => {
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

  dataList.map((data)=>
  {
    data.markInfo.sort((a, b) => a.x - b.x);
  })
 
 return dataList;

 
}

const tableDataConverter=(markList)=>
{
  const tableList = markList.map((mark) => ({
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
  const getTestDetails=()=>
  {
      axios.get('https://school-management-api.azurewebsites.net/students/12/performance')
      .then((res)=>
      {
       
        setTestDetails(dataConvert(res.data.allmarksDetail));
        setTableTestDetails(tableDataConverter(res.data.allmarksDetail));
      
       
      }).catch((err)=>
      {
        console.log(err);
      })
  }
  useEffect(()=>
  {
    
      getTestDetails();
  },[])
    tableTestDetails.map((item,index)=>
    {
      console.log(item);
    })
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.tableContainer}>
     
        {
        tableTestDetails.map((item,index)=>
        (
            <Mark key={item.test_id} data={item.subjectMarkList} testId={item.test_id}
              testDate={item.test_date}
            />
        )
        )
        }
        </View>
  
       

        <View style={styles.chartContainer}>
          {
           testDetails?.map((item,index)=>
             (
             <Chart key={index}  data={item} type={"bezier"} color1={"#2BC0E4"} color2={"#affae9"} subject={item.subjectName}/>
             ))
          }
        
        {/* <Chart type={"bezier"} color1={"#FFE47A"} color2={"#affae9"} subject={"Physics"}/>
        <Chart type={"bezier"} color1={"#1CD8D2"} color2={"#affae9"} subject={"Mathematics"}/>
         
        <Chart type={"bezier"} color1={"#2BC0E4"} color2={"#affae9"} subject={"Biology"}/>
        <Chart type={"bezier"} color1={"#EAECC6"} color2={"#affae9"} subject={"Biology"}/>
        <Chart type={"bezier"} color1={"#8E54E9"} color2={"#affae9"} subject={"Biology"}/>
        <Chart type={"bezier"} color1={"#12D8FA"} color2={"#affae9"} subject={"Biology"}/>
        <Chart type={"bezier"} color1={"#AA076B"} color2={"#affae9"} subject={"Biology"}/>
        <Chart type={"bezier"} color1={"#E55D87"} color2={"#affae9"} subject={"Biology"}/> */}
     
        {/* <CharttWrapper/> */}
        
       {/* <BarGraph/> */}
         {/* <ScrolableChart subject={"Chemistry"} color1={"#d1e2f5"} color2={"#affae9"} /> */}
        
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
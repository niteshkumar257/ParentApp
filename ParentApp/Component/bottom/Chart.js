import { View, Text,StyleSheet,Dimensions ,TouchableOpacity} from 'react-native'
import React ,{useState} from 'react'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis ,Tooltip} from 'react-native-responsive-linechart'
import Icon from "react-native-vector-icons/Ionicons";




const {width}=Dimensions.get('screen');
const ChartC = ({type,color1,color2,subject}) => {
  const [month,setMonth]=useState(0);
  const [score,setScore]=useState(0);
  const [total,setTotal]=useState(0);
  const [show,setShow]=useState(false);
  let months=["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
  const toolTip=(object)=>
  {
    console.log(object);
     setMonth(object.x);
     setScore(object.y);
     setTotal(object.meta);
     setShow(true);
   
  }
 
  const showHandler=()=>
  {
    setShow(false);
    setMonth(0);
    setScore(0);
  }
 
 
  return (
   
    <View style={styles.chartContainer}>

     { show &&  score!=0 && month!=0 &&
     <View style={styles.scoreContainer}>
      <View style={styles.valueContainer}>
      <Text style={styles.keyText}>Month : {months[month-1]}</Text>
        <Text style={styles.keyText}>Mark : {score}/{total}</Text>
        
      </View>
      <View>
        <TouchableOpacity onPress={showHandler}>
          <Icon name="close-sharp" size={20} color={"black"}/>
        </TouchableOpacity>
      </View>
       
      </View>}
      <Text style={styles.valueText}>{subject}</Text>
      <Chart
  style={{ height: 200, width:360 }}
  data={[
    { x: 1, y: 89 ,meta:100 },
    { x: 2, y: 56,meta:100 },
    { x: 3, y: 89,meta:100 },
    { x: 4, y: 73,meta:100 },
    { x: 5, y: 60,meta:100 },
    { x: 6, y: 85 ,meta:100},
    { x: 7, y: 90 ,meta:100},
    { x: 8, y: 86,meta:100 },
    { x: 9, y: 52,meta:100 },
    { x:10, y: 54,meta:100 },
    { x:11, y: 92,meta:100 },
    { x:12 ,y: 15 ,meta:100},
   
  ]}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: 1, max: 12 }}
  yDomain={{ min: 0, max: 100 }}
>
  <VerticalAxis tickCount={5} theme={{ 
       axis: {
        visible: false,
        stroke: {
          color: '#bbb',
          width: 0,
          opacity: 1,
          dashArray: [2]
        },
        dy: 0,
      },
      grid: {
        visible: false,
        stroke: {
          color: '#ccc',
          width: 1.5,
          opacity: 1,
          dashArray: [2]
        },
      },
      ticks: {
        visible: false,
        stroke: {
          color: '#000',
          width: 1.5,
          opacity: 1,
        },
        dy: 2,
        length: 8,
        includeOriginTick: false,
      },
      labels: {
        visible: true,
        label: {
          color: '#000',
          fontSize: 10,
          fontWeight: 400,
          textAnchor: 'middle',
          opacity: 1,
          dx: 0,
          dy: -12,
          rotation: 0,
          fontFamily: 'your font here'
        },
       
      },
    labels: { formatter: (v) => v.toFixed(0) } }} />
  <HorizontalAxis tickCount={12} 
  theme={
    {
      axis: {
        visible: false,
        stroke: {
          color: '#bbb',
          width: 0,
          opacity: 1,
          dashArray: []
        },
        dy: 0,
      },
      grid: {
        visible: false,
        stroke: {
          color: '#ccc',
          width: 1,
          opacity: 1,
          dashArray: []
        },
      },
      ticks: {
        visible: false,
        stroke: {
          color: '#000',
          width: 1,
          opacity: 1,
        },
        dy: 0,
        length: 6,
        includeOriginTick: false,
      },
      labels: {
        visible: true,
        label: {
          color: '#000',
          fontSize: 10,
          fontWeight: 300,
          textAnchor: 'middle',
          opacity: 1,
          dx: 0,
          dy: -12,
          rotation: 0,
          fontFamily: 'your font here'
        },
       
      },
    }
  }
  />
  <Area
  smoothing={type}
   theme={{ gradient: { from: { color:color1 }, to: { color:"white", opacity: 0.7 } }}} />
    <Line   smoothing={type}  
    onTooltipSelect={(x,y,meta)=>
    {
      toolTip(x,y,meta);
    }}
    tooltipComponent={<Tooltip 
     
    />}
    hideTooltipAfter={1000}
    hideTooltipOnDragEnd={false}

  
    
    theme={{ stroke: { color: 'black', width: .5 }, scatter: { default: { width: 5, height: 5, rx: 3, color: color1 }, selected: { color: 'red' } } }}  />
   

</Chart>
<View
  
/>
    </View>
  )
}

export default ChartC;
const styles=StyleSheet.create(
  {
    chartContainer:{

      height:"auto",
      width: '97%',
      backgroundColor: 'white',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 5,
      borderRadius:9,
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:5
    },
    scoreContainer:{
        display:"flex",
        flexDirection:'row',
        columnGap:10,
       height:50,
       width:"100%",
       justifyContent:"flex-end",
       alignItems:"center",
      
     

    },
    keyText:{
      fontSize:15,
      color:"black",
      fontWeight:600

    }
    ,valueText:{
      fontSize:20,
      color:"black",
      fontWeight:600
    },
    valueContainer:{
      display:"flex",
      alignItems:"center",
      flexDirection:"row",
      columnGap:20,
      backgroundColor:"#1377c0",
      justifyContent:"center",
      height: 50,
      width:250,
      backgroundColor: 'white',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 5,
      borderRadius:9
    }
  }
)
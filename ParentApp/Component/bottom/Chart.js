import { View, Text } from 'react-native'
import React from 'react'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis ,Tooltip} from 'react-native-responsive-linechart'



const ChartC = ({type,color1,color2}) => {
  return (
    <View>
      <Chart
  style={{ height: 200, width: 400 }}
  data={[
    { x: 1, y: 89 },
    { x: 2, y: 56 },
    { x: 3, y: 89 },
    { x: 4, y: 73 },
    { x: 5, y: 60 },
    { x: 6, y: 85 },
    { x: 7, y: 90 },
    { x: 8, y: 86 },
    { x: 9, y: 52 },
    { x: 10, y: 54 },
    { x: 11, y: 92 },
    { x: 12, y: 15 },
   
  ]}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: 1, max: 12 }}
  yDomain={{ min: 0, max: 100 }}
>
  <VerticalAxis tickValues={[0,10,20,30,40,50,60,70,80,90,100]} theme={{ 
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
   theme={{ gradient: { from: { color:color1 }, to: { color: color2, opacity: 0.7 } }}} />
    <Line   smoothing={type}  tooltipComponent={<Tooltip />}  theme={{ stroke: { color: 'black', width: 0.5 }, scatter: { default: { width: 2, height: 2, rx: 1, color: 'black' }, selected: { color: 'red' } } }}  />
   

</Chart>
    </View>
  )
}

export default ChartC
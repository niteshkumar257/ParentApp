import { View, Text } from 'react-native'
import React from 'react'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'



const ChartC = () => {
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
  <VerticalAxis tickCount={10} theme={{ 
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
  smoothing='cubic'
   theme={{ gradient: { from: { color: '#f7797d' }, to: { color: '#f7797d', opacity: 0.7 } }}} />
    {/* <Line theme={{ stroke: { color: 'pink', width: 2 } }} /> */}
   

</Chart>
    </View>
  )
}

export default ChartC
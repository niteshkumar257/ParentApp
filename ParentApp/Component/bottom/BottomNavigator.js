import {View, Text, Image,Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

import VideoStackNavigator from './VideoStackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import DataContext from '../Context/DataContext';

import Fees from "../../assets/Fees.svg";
import Curriculum from "../../assets/Curriculum1.svg";
import Peformance from "../../assets/performance.svg";
import Mentor from "../../assets/mentor.svg";





const Bottom = createBottomTabNavigator();
const BottomNavigator = ({id}) => {
 
 
  const Tab = createBottomTabNavigator();
  return (
    
    <DataContext.Provider value={{id}}>

 
     <Tab.Navigator 
     screenOptions={({route}) => ({
    
      tabBarShowLabel: false,
      tabBarLabel:"nitesh",
      tabBarInactiveTintColor: "wh",
       tabBarActiveBackgroundColor:"#318CE7",
       tabBarInactiveBackgroundColor:"black",
      tabBarActiveTintColor:"white",
      tabBarHeaderStyle:{

      },
    
      tabBarIconStyle:{
          
      },
      tabBarLabelStyle:{
        fontSize:20,
        color:"red",
      },
      tabBarOptions: {
        activeTintColor: '#cd077d',

    },
      tabBarIcon: ({color, size=50, focused}) => {
        let iconName;

        if (route.name === "Curriculum") {
          iconName = focused ? 'school-sharp' : 'school-outline';
        } else if (route.name ==="Fees") {
          iconName = focused ? 'wallet-sharp' : 'wallet-outline';
        } else if (route.name ==="Peformance") {
          iconName = focused ? 'analytics-sharp' : 'analytics-outline';
        } else if (route.name ==="Mentor") {
          iconName = focused
            ? 'people-sharp'
            : 'people-outline';
        }
        else if (route.name ==="Subjects") {
          iconName = focused
            ? 'logo-youtube'
            : 'logo-youtube';
        }

        return <Icon name={iconName} size={35}  color={"white"} style={{
         
        }}/>;
        
      },
    })}
     >
    <Tab.Screen name="Curriculum" component={Screen1} />
    <Tab.Screen name="Fees" component={Screen2} />
    <Tab.Screen name="Peformance" component={Screen3} />
    <Tab.Screen name="Mentor" component={Screen4} options={{
      headerTintColor: 'black',
   
    
    }} />
    <Tab.Screen name="Subjects" component={VideoStackNavigator} options={{
      title:"All Subjects",tabBarShowLabel:false,headerShown:false,
    }} />
  </Tab.Navigator>
  </DataContext.Provider>
    
  )
};

export default BottomNavigator;

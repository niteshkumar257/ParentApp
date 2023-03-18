import {View, Text, Image,Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Icon from 'react-native-vector-icons/Ionicons';
import Fees from "../../assets/Fees.svg";
import Curriculum from "../../assets/Curriculum1.svg";
import Peformance from "../../assets/performance.svg";
import Mentor from "../../assets/mentor.svg";




const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    
     <Tab.Navigator 
     screenOptions={({route}) => ({
      headerShown:false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: "#1377c0",
       tabBarActiveBackgroundColor:"white",
      tabBarActiveTintColor:"black",
      tabBarIcon: ({color, size, focused}) => {
        let iconName;

        if (route.name ==="Curriculum") {
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

        return <Icon name={iconName} size={35} color={"#1377c0"} style={{
         
        }}/>;
      },
    })}
     >
    <Tab.Screen name="Curriculum" component={Screen1} />
    <Tab.Screen name="Fees" component={Screen2} />
    <Tab.Screen name="Peformance" component={Screen3} />
    <Tab.Screen name="Mentor" component={Screen4} />
  </Tab.Navigator>
    
  )
};

export default BottomNavigator;

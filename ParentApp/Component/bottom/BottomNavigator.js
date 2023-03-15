import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fees from "../../assets/Fees.svg";
import Curriculum from "../../assets/Curriculum1.svg";
import Peformance from "../../assets/performance.svg";
import Mentor from "../../assets/mentor.svg";


const Bottom = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Curriculum"
        component={Screen1}
        options={{
         
          headerShown:false,
          tabBarIcon: tabInfo => {
            return (
              <Curriculum
               height={25}
               width={25}
               
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? '#1377c0' : 'black',
                }}
              />
            );
          },

        }}
      />
      <Bottom.Screen
        name="Fees"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Fees
                 height={25}
                 width={25}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? '#1377c0' : 'black',
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Peformance"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Peformance
               height={25}
               width={25}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? '#1377c0' : 'black',
                }}
              />
            );
          },
        }}
      />
       <Bottom.Screen
      
        name="Mentor Request"
        component={Screen4}
        options={{
          headerShown: false,
          tabBarIcon: tabInfo => {
            return (
              <Mentor
                height={25}
                width={25}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: tabInfo.focused ? '#1377c0' : 'black',
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;

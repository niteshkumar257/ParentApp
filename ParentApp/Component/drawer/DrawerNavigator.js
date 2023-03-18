import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import CustomDrawer from './CustomDrawer';
import Children from '../normal/Children';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
  
     drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name=" Hi ,Swayam "
        component={Main}
        options={{headerShown: true}}
      />
     
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

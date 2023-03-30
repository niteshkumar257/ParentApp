import { View, Text } from 'react-native'
import React from 'react'
import Video from './Videos'
import Biology from './Biology';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const VideoStackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#318CE7' },
      }}
    >
        <Stack.Screen 
          name="video"
          component={Video}
          options={{ title: 'All Subjects'}}
        />
         <Stack.Screen 
          name="subject"
          component={Biology}
          options={{ title: 'Subject wise'}}
        />
    </Stack.Navigator>
  )
}

export default VideoStackNavigator
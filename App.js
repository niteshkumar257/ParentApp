import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './Component/AppNavigator'
import { AuthProvider } from './Component/Context/Context'


 


const App = () => {
 
  return (
    <AuthProvider>
          <AppNavigator/>
    </AuthProvider>
  
  )
}

export default App
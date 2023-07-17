import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import BottomNavigator from './BottomNavigator';

const App = () => {
  return (
         <NavigationContainer>
          <BottomNavigator/>
        
      </NavigationContainer>
     
  )
}

export default App

const styles = StyleSheet.create({})
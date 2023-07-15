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
    <View>
         <NavigationContainer>
          <BottomNavigator/>
        
      </NavigationContainer>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
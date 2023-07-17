
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAccounting from './src/screens/HomeAccounting';
import Summary from './src/screens/Summary';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 18 },
        inactiveTintColor: 'black'
      }}
    >
      <Tab.Screen name="Home" component={HomeAccounting}

        options={{
          tabBarIcon: ({ focused }) => {
            return (
              renderIcon("Home", focused)
            );
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="Summary" component={Summary}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              renderIcon("Summary", focused)
            );
          },
          tabBarShowLabel: false,
          headerShown: false
        }}
      />
      <Tab.Screen name="Trade" component={HomeAccounting}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              renderIcon("Trade", focused)
            );
          },
          tabBarShowLabel: false,
          headerShown: false
        }} />
      <Tab.Screen name="Profile" component={Summary}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              renderIcon("Profile", focused)
            );
          },
          tabBarShowLabel: false,
          headerShown: false
        }}
      />
      <Tab.Screen name="Wallet" component={HomeAccounting}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              renderIcon("Wallet", focused)
            );
          },
          tabBarShowLabel: false,
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};
const iconHeightWidth = 24;

const renderIcon = (tabName, focused) => {
  switch (tabName) {
    case "Home":
      if (focused)
        return <Entypo name="home" size={iconHeightWidth} />;
      else
        return <AntDesign name="home" size={iconHeightWidth} />;


    case "Summary":
      if (focused)
        return <Ionicons name="chatbubbles" size={iconHeightWidth} />;
      else
        return <Ionicons name="chatbubbles-outline" size={iconHeightWidth} />;

    case "Trade":
      if (focused)
        return <MaterialCommunityIcons name="bag-suitcase" size={iconHeightWidth} />
      else
        return <MaterialCommunityIcons name="bag-suitcase-outline" size={iconHeightWidth} />

    case "Profile":
      if (focused)
        return <Ionicons name="md-person-circle" size={iconHeightWidth} />;
      else
        return <Ionicons name="md-person-circle-outline" size={iconHeightWidth} />;

    case "Wallet":
      if (focused)
        return <Ionicons name="wallet" size={iconHeightWidth} />;
      else
        return <Ionicons name="wallet-outline" size={iconHeightWidth} />;
  }
};

export default BottomNavigator;
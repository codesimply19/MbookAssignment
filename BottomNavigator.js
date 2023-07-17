import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAccounting from './src/screens/HomeAccounting';
import Summary from './src/screens/Summary';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      labelStyle: {fontSize:18},
      // activeTintColor: 'red',
      inactiveTintColor: 'black'
    }}
    >
      <Tab.Screen name="Home" component={HomeAccounting}
       options={{
        // title: strings(StringConstants.TAB_NAME_ORDERS),
        tabBarIcon: ({ focused }) => {
          return (
            renderIcon("Home", focused )
          );
        },
      }}
       />
      <Tab.Screen name="Summary" component={Summary} 
       options={{
        // title: strings(StringConstants.TAB_NAME_ORDERS),
        tabBarIcon: ({ focused }) => {
          return (
            renderIcon("Summary", focused )
          );
        },
      }}
      />
      <Tab.Screen name="Trade" component={HomeAccounting} />
      <Tab.Screen name="Profile" component={Summary} />
      <Tab.Screen name="Wallet" component={HomeAccounting} />
    </Tab.Navigator>
  );
};
const iconHeightWidth = 24;

const renderIcon = (tabName, focused) => {
  switch (tabName) {
    case "Home":
      if (focused)
      return <Entypo name="home"  size={iconHeightWidth}  />;      
      else
      return <AntDesign name="home"  size={iconHeightWidth}  />;
  

    case "Summary":
     if (focused)
        return <Ionicons name ="chatbubbles" size={iconHeightWidth} />;
      else
        return <Ionicons name ="chatbubbles-outline" size={iconHeightWidth} />;

//     case "Trade":
// if (focused)
//         return <SelectedTrade height={iconHeightWidth} width={iconHeightWidth} />;
//       else
//         return <UnSelectedTrade height={iconHeightWidth} width={iconHeightWidth} />;

//     case "Profile":
//      if (focused)
//         return <SelectedOder height={iconHeightWidth} width={iconHeightWidth} />;
//       else
//         return <UnSelectedOder height={iconHeightWidth} width={iconHeightWidth} />;

//     case "Wallet":
//       if (focused)
//         return <SelectedProfile height={iconHeightWidth} width={iconHeightWidth} />;
//       else
//         return <UnSelectedProfile height={iconHeightWidth} width={iconHeightWidth} />;
  }
};

export default BottomNavigator;
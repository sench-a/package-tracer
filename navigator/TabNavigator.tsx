// ! IMPORTS

import React from 'react';

// ! <-- NAVIGATION -->
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ! <-- SCREENS -->
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';

// ! <-- STYLING -->
import { Icon } from "@rneui/themed";



export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="people-outline"
                type="ionicon"
                size={28}
                color={ focused ? "#59C1CC" : "gray" }
              />
            )
          } else if (route.name === "Orders") {
            return (
              <Icon
                name="cube-outline"
                type="ionicon"
                size={28}
                color={ focused ? "#EB6A7C" : "gray" }
              />
            )
          }
        }
      })}
    > 
        <Tab.Screen 
          name="Customers" 
          component={CustomersScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Orders" 
          component={OrdersScreen} 
          options={{ headerShown: false }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator
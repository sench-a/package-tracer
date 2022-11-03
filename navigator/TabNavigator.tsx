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
      screenOptions={{
          tabBarStyle: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.35,
            shadowRadius: 7,

            elevation: 10
          }
      }}
    > 
        <Tab.Screen 
          name="Customers" 
          component={CustomersScreen} 
          options={{ 
            headerShown: false,
            tabBarActiveTintColor: "#59C1CC",
            tabBarIcon: ({focused}) => {
              return <Icon
                name="people-outline"
                type="ionicon"
                size={30}
                color={focused ? "#59C1CC" : "gray"} />;
            }
          }}
        />
        <Tab.Screen 
          name="Orders" 
          component={OrdersScreen} 
          options={{ 
            headerShown: false,
            tabBarActiveTintColor: "#EB6A7C",
            tabBarIcon: ({focused}) => {
              return <Icon
                name="cube-outline"
                type="ionicon"
                size={30}
                color={focused ? "#EB6A7C" : "gray"} />;
            }
          }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator
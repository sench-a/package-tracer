// ! IMPORTS

import React from 'react';

// ! <-- NAVIGATION -->
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ! <-- COMPONENTS -->
import TabNavigator from "./TabNavigator";

// ! <-- SCREENS -->
import CustomerScreen from '../screens/CustomerScreen';
import OrderScreen from '../screens/OrderScreen';




export type RootStackParamList = {
    Main: undefined;
    Customer: { 
        userId: string;
        name: string;
    };
    Order: {
        order: Order;
    };
}


const RootStack = createNativeStackNavigator<RootStackParamList>();


const RootNavigator = () => {
  return (
    <RootStack.Navigator>

        <RootStack.Group>
            <RootStack.Screen 
                name="Main" 
                component={TabNavigator} 
                options={{ 
                    headerShown: false,
                }}
            />
        </RootStack.Group>

        <RootStack.Group
            screenOptions={{
                presentation: 'modal',
            }}
        >
            <RootStack.Screen
                name="Customer"
                component={CustomerScreen}
                options={{ 
                    headerShown: false,
                }}
            />
        </RootStack.Group>

        <RootStack.Group
            screenOptions={{
                presentation: 'modal',
            }}
        >
            <RootStack.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    headerShown: false,
                }}
            />
        </RootStack.Group>

    </RootStack.Navigator>
  )
}

export default RootNavigator
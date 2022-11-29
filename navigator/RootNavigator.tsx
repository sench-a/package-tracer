import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from "./TabNavigator";
import CustomerScreen from '../screens/CustomerScreen';
import OrderScreen from '../screens/OrderScreen';


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
// ! IMPORTS

import React from 'react';

// ! <-- NAVIGATION -->
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ! <-- COMPONENTS -->
import TabNavigator from "./TabNavigator";



export type RootStackParamList = {
    Main: undefined;
    MyModal: { 
        userId: string;
        name: string;
    };
    Order: {
        order: any
    };
}


const RootStack = createNativeStackNavigator();


const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Group>
            <RootStack.Screen 
                name="Main" 
                component={TabNavigator} 
                options={{ headerShown: false }}
            />
        </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator
// ! IMPORTS
import React from 'react';

// ! <-- STYLING -->
import tw from 'twrnc';

// ! <-- NAVIGATION -->
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ! <-- COMPONENTS -->
import RootNavigator from './navigator/RootNavigator';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
  

export default App;


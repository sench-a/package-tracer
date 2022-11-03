// ! IMPORTS
import React from 'react';

// ! <-- NAVIGATION -->
import { NavigationContainer } from '@react-navigation/native';

// ! <-- COMPONENTS -->
import RootNavigator from './navigator/RootNavigator';

// ! <-- APOLLO CLIENT -->
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";



const client = new ApolloClient({
  uri: "http://localhost:5001/api/eponymous-kudu",
  cache: new InMemoryCache(),
});


const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    </NavigationContainer>
  );
}
  
export default App;


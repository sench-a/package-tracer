import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
          <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}



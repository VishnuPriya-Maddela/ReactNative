import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import GlobalProvider from './src/context/Provider'
import AppNav from "./src/navigation/index"
const App = () => {
  return (
    <GlobalProvider>
      <AppNav/>
    </GlobalProvider>
   
  );
};

export default App;

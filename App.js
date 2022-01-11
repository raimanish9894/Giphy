
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import Tabs from './navigator/bottomTab';
import RootStackScreen from './screens/rootStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <RootStackScreen />
    </NavigationContainer>
  );
}



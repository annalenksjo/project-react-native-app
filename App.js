import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styled from 'styled-components/native';

import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { LogOut } from './screens/LogOut';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>      
      <Drawer.Navigator>
        <Drawer.Screen name="🏠 Home" component={Home} />
        <Drawer.Screen name="👤 Profile" component={Profile} />
        <Drawer.Screen name="🗝️ Log out" component={LogOut} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

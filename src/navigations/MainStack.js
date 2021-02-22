import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Preload from './../screens/Preload';
import Login from './../screens/Login';
import AppDrawer from './AppDrawer';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preload" headerMode="none">
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

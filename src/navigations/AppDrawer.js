import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';
import Home from './../screens/Home';
import Config from '../screens/Config';
import Travels from '../screens/Travels';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Config"
        component={Config}
        options={{ title: 'Configurações' }}
      />
      <Drawer.Screen
        name="Travels"
        component={Travels}
        options={{ title: 'Minhas viagens' }}
      />
    </Drawer.Navigator>
  );
}

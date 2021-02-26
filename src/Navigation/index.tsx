import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginSignup/LoginScreen';
import BottomNav from './BottomNav';

const StackNav = createStackNavigator();
function RootNav() {
  return (
    <StackNav.Navigator screenOptions={{headerShown: false}}>
      <StackNav.Screen name="LoginSignup" component={LoginScreen} />
      <StackNav.Screen name="AppHome" component={BottomNav} />
    </StackNav.Navigator>
  );
}

export default RootNav;

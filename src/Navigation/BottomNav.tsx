import React from 'react';
import HomeScreen from '../Screens/Home/Index';
import DraftScreen from '../Screens/Draft/Index';
import TodoScreen from '../Screens/Notes/Index';

import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Settings from '../Screens/Settings/Index';
import LoginScreen from '../Screens/LoginSignup/LoginScreen';

const BottomTab = createMaterialBottomTabNavigator();

const ButtonNav: React.FC<{}> = () => {
  const [color, setcolor] = React.useState('white');
  return (
    <BottomTab.Navigator initialRouteName="Home" backBehavior="initialRoute">
      <BottomTab.Screen
        name="Home"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon name={'home-outline'} size={21} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Drafts"
        component={DraftScreen}
        options={{
          tabBarIcon: () => (
            <Icon name={'clipboard-outline'} size={21} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notes"
        component={TodoScreen}
        options={{
          tabBarIcon: () => (
            <Icon name={'list-outline'} size={21} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => (
            <Icon name={'settings-outline'} size={21} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default ButtonNav;

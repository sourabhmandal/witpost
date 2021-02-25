import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import ButtonNav from './src/Navigation/BottomNav';

const App = () => {
  return (
    <NavigationContainer>
      <ButtonNav />
    </NavigationContainer>
  );
};

export default App;

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import BottomNav from './src/Navigation/BottomNav';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import RootNav from './src/Navigation';
import {withAuthenticator} from 'aws-amplify-react-native';
Amplify.configure(config);

const App = () => {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);

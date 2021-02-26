import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const HomeScreen: React.FC<{}> = () => {
  const image = require('../../../assets/edition.png');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.header1}>Wit Post</Text>
      <Text style={styles.header2}>
        Pen down your thoughts and Express yourself
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: '40%',
    aspectRatio: 1,
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 10,
  },
  header2: {
    fontSize: 20,
    fontWeight: '100',
    color: '#aaa',
    textAlign: 'center',
  },
});
export default HomeScreen;

import React from 'react';
import {StyleSheet, Image, View, FlatList, Text} from 'react-native';
import CompactListItem from '../../Components/CompactListItem';
const image = require('../../../assets/edition.png');

const article_drafts = [
  {
    id: 1,
    icon: 'A',
    title: 'first article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 2,
    icon: 'B',
    title: 'second article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 3,
    icon: 'C',
    title: 'third article on platform',
    subtitle: 'awesome working on this article',
  },
];
const DraftScreen: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  image: {
    height: '20%',
    aspectRatio: 1,
  },
});
export default DraftScreen;

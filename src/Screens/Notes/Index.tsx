import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
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
  {
    id: 4,
    icon: 'A',
    title: 'first article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 5,
    icon: 'B',
    title: 'second article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 6,
    icon: 'C',
    title: 'third article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 7,
    icon: 'A',
    title: 'first article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 8,
    icon: 'B',
    title: 'second article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 9,
    icon: 'C',
    title: 'third article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 10,
    icon: 'A',
    title: 'first article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 11,
    icon: 'B',
    title: 'second article on platform',
    subtitle: 'awesome working on this article',
  },
  {
    id: 12,
    icon: 'C',
    title: 'third article on platform',
    subtitle: 'awesome working on this article',
  },
];

const TodoScreen: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.headImage} />
      <Text style={styles.headText}>Notes</Text>

      <FlatList
        data={article_drafts}
        renderItem={({item}) => <CompactListItem CompactDraftList={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  headContainer: {
    flexDirection: 'row',
  },
  headImage: {
    height: '20%',
    aspectRatio: 1,
    margin: 10,
  },
  headText: {
    fontSize: 30,
    color: '#bbb',
    fontWeight: '700',
    paddingHorizontal: 20,
  },
});
export default TodoScreen;

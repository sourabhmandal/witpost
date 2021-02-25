import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface CompactListItemProps {
  CompactDraftList: {
    id: Number;
    icon: String;
    title: String;
    subtitle: String;
  };
}

const CompactListItem: React.FC<CompactListItemProps> = (
  props: CompactListItemProps,
) => {
  const {
    CompactDraftList: {id, icon, title, subtitle},
  } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CompactListItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  icon: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#cccccc',
    borderRadius: 100,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {},
});

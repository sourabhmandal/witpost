import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

interface ChildComponent {
  children: ReactNode;
}

const Center: React.FC<ChildComponent> = (props) => {
  return <View style={styles.center}>{props.children}</View>;
};
export default Center;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

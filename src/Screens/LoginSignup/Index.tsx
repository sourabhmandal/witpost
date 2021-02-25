import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const LoginSignup: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text>Login - Signup</Text>
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
export default LoginSignup;

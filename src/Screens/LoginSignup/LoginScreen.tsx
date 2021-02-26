import {Auth} from 'aws-amplify';
import React from 'react';
import {Alert, Image, Button, Text, View, StyleSheet} from 'react-native';
import Center from '../../Components/utils/Center';

const LoginScreen: React.FC<{}> = () => {
  const [image, setImage] = React.useState(
    require('../../../assets/edition.png'),
  );

  const handleGoogleSignin = async () => {
    await Auth.federatedSignIn({customProvider: 'Google'});
  };

  return (
    <Center>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.header1}>Wit Post</Text>
        <Text style={styles.header2}>
          Pen down your thoughts and Express yourself
        </Text>

        <Button onPress={handleGoogleSignin} title="Login Google"></Button>
      </View>
    </Center>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
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

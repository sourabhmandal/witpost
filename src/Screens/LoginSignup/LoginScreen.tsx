import React from 'react';
import {Alert, Image, Pressable, Text, View, StyleSheet} from 'react-native';
import Center from '../../Components/utils/Center';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

GoogleSignin.configure({
  scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    '598702854346-b9usec3f1qtdhri812s5l31f3h5avmiq.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceConsentPrompt: false, // [Android] if you want to show the authorization prompt at each login.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

const LoginScreen: React.FC<{}> = () => {
  const [image, setImage] = React.useState(
    require('../../../assets/edition.png'),
  );
  const [isSigninInProgress, setisSigninInProgress] = React.useState(false);

  const googleSignin = () => async () => {
    console.log('Here');
    setisSigninInProgress(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      //this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.warn(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        console.warn(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.warn(error);
      } else {
        console.warn(error);
      }
    }
  };

  return (
    <Center>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.header1}>Wit Post</Text>
        <Text style={styles.header2}>
          Pen down your thoughts and Express yourself
        </Text>
        <GoogleSigninButton
          style={{width: 192, height: 48, marginTop: 'auto'}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={googleSignin}
          disabled={isSigninInProgress}
        />
        <FBLogin />
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

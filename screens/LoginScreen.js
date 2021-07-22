import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {firebase} from '@react-native-firebase/auth';

import {WEB_CLIENT_ID} from '../utils/keys';

function configureGoogleSign() {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
    offlineAccess: true,
  });
}

const Login = ({navigation}) => {
  useEffect(() => {
    configureGoogleSign();
    getCurrentUserInfo();
  }, []);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUserInfo(userInfo);
      userInfo
        ? navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'MainScreen',
                  // params: { user: 'jane' },
                },
              ],
            }),
          )
        : setIsLoading(false);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // when user hasn't signed in yet
        // Alert.alert('Please Sign in')
        setIsLoading(false);
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(false);
      }
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              name: 'MainScreen',
              // params: { user: 'jane' },
            },
          ],
        }),
      );
      setIsLoading(false);
      setError(null);
      setIsLoggedIn(true);
      const {accessToken, idToken} = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await firebase.auth().signInWithCredential(credential);
      // login with credential
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // when user cancels sign in process,
        Alert.alert('Process Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // when in progress already
        Alert.alert('Process in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // when play services not available
        Alert.alert('Play services are not available');
      } else {
        // some other error
        Alert.alert('Something else went wrong... ', error.toString());
        setError(error);
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      Alert.alert('Something else went wrong... ', error.toString());
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#cbd0f0" />
      {isLoading ? (
        <View style={styles.splashScreen}>
          <Text style={styles.bento}>Bento</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <GoogleSigninButton
            style={styles.signInButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => signIn()}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#cbd0f0',
    alignItems: 'center',
    fontSize: 19,
  },

  statusContainer: {
    marginVertical: 20,
  },
  splashScreen: {
    flex: 1,
    backgroundColor: '#cbd0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bento: {
    fontFamily: 'Quicksand-Bold',
    fontWeight: '100',
    fontSize: 32,
    color: 'white',
    letterSpacing: 1,
  },
});

export default Login;

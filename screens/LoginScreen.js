import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableNativeFeedback,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {
  COLORS,
  FONTS,
  images,
  icons,
  SIZES,
  GOOGLE_API_KEY,
} from '../constants';
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
  const [isDriver, setIsDriver] = useState(false);
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
                  name: 'Wallet',
                  params: userInfo.user,
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
              name: isDriver ? 'OnBoarding' : 'Wallet',
              params: userInfo.user,
              driver: isDriver,
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
      <StatusBar barStyle="light-content" backgroundColor="#201F1B" />
      {isLoading ? (
        <View style={styles.splashScreen}>
          <Text style={styles.bento}>Nakamoto Sans</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <StatusBar
            backgroundColor="#201F1B"
            animated
            barStyle="light-content"
          />
          <Text style={styles.heading}>LOGIN</Text>
          <Image
            source={images.loginImage}
            style={{
              marginTop: 20,
              width: '98%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
          <Pressable
            onPress={() => {
              setIsDriver(!isDriver);
            }}
            style={{alignSelf: 'flex-start'}}>
            <View style={styles.selector}>
              <View
                style={{
                  height: 22,
                  width: 22,
                  borderRadius: 20,
                  marginRight: 10,
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#FECA5D',
                }}>
                <View
                  style={{
                    height: 13,
                    width: 13,
                    borderRadius: 20,

                    backgroundColor: isDriver ? '#FECA5D' : 'transparent',
                  }}></View>
              </View>
              <Text style={styles.subText}>Are you a driver?</Text>
            </View>
          </Pressable>

          <View
            style={{
              height: 65,
              width: '79%',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#FECA5D',
              borderRadius: 7,
            }}>
            <TouchableNativeFeedback
              onPress={() => {
                signIn();
              }}>
              <View style={styles.button}>
                <Image
                  source={icons.metamask}
                  style={{height: 45, width: 45, resizeMode: 'contain'}}
                />
                <Text style={styles.buttonText}>Sign In with google</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    marginVertical: 20,
  },
  splashScreen: {
    flex: 1,
    backgroundColor: '#1C1C19',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bento: {
    fontFamily: 'MPLUSRounded1c-Bold',
    fontSize: 40,
    color: '#FECA5D',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  container: {
    backgroundColor: '#201F1B',
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'MPLUSRounded1c-Bold',
    position: 'absolute',
    top: 65,
    left: '10%',
    zIndex: 1,
    fontSize: 38,
    color: '#201f1b',
    letterSpacing: 4,
  },
  selector: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
    marginLeft: 40,
    alignSelf: 'flex-start',
  },
  subText: {
    fontFamily: 'MPLUSRounded1c-Regular',
    color: 'white',
    fontSize: 19,
    // top: -10,
  },
  button: {
    height: 65,
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FECA5D',
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: 'MPLUSRounded1c-Medium',
    color: '#372D35',
    fontSize: 23,
    textTransform: 'uppercase',
  },
});

export default Login;

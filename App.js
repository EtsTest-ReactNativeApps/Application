import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {MainScreen} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'MainScreen'}>
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> */}
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

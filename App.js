import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import { MainScreen } from './screens'
import Login from './screens/LoginScreen'
import Wallet from './screens/WalletScreen'
import OnBoarding from './screens/OnBoardingScreen'
import Loading from './screens/LoadingScreen'
import LoadingDriver from './screens/LoadingDriver'
import CustomerList from './screens/CustomerListScreen'

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={'Login'}
            >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Wallet' component={Wallet} />
                <Stack.Screen name='OnBoarding' component={OnBoarding} />
                <Stack.Screen name='MainScreen' component={MainScreen} />
                <Stack.Screen name='Loading' component={Loading} />
                <Stack.Screen name='LoadingDriver' component={LoadingDriver} />
                <Stack.Screen name='CustomerList' component={CustomerList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

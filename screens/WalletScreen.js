import React from 'react'
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableNativeFeedback,
    TextInput,
} from 'react-native'
import {
    COLORS,
    FONTS,
    images,
    icons,
    SIZES,
    GOOGLE_API_KEY,
} from '../constants'
import { CommonActions } from '@react-navigation/native'

const Wallet = ({ navigation, route }) => {
    console.log(route.params)
    const [isDriver, setIsDriver] = React.useState(true)
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor='#201F1B'
                animated
                barStyle='light-content'
            />
            <Text style={styles.heading}>WALLET</Text>
            <Image
                source={images.walletImage}
                style={{
                    marginTop: 20,
                    width: '98%',
                    height: '80%',
                    resizeMode: 'contain',
                }}
            />
            <View
                style={{
                    position: 'relative',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        height: 65,
                        width: '79%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#FECA5D',
                        borderRadius: 7,
                        marginRight: 10,
                    }}
                >
                    <TouchableNativeFeedback>
                        <View style={styles.button}>
                            <Image
                                source={icons.metamask}
                                style={{
                                    height: 40,
                                    width: 40,
                                    resizeMode: 'contain',
                                    marginRight: 10,
                                }}
                            />
                            <TextInput
                                style={styles.buttonText}
                                placeholder='CONNECT METAMASK'
                                // value={input.ingredient}
                                // onChangeText={text => ingredientInput(text, key)}
                            />
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <TouchableNativeFeedback
                    onPress={() => {
                        !isDriver
                            ? navigation.dispatch(
                                  CommonActions.reset({
                                      index: 1,
                                      routes: [
                                          {
                                              name: 'MainScreen',
                                              params: { ride: false },
                                          },
                                      ],
                                  })
                              )
                            : navigation.dispatch(
                                  CommonActions.reset({
                                      index: 1,
                                      routes: [
                                          {
                                              name: 'LoadingDriver',
                                              params: { driver: true },
                                          },
                                      ],
                                  })
                              )
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FECA5D',
                            borderRadius: 7,
                            height: 55,
                        }}
                    >
                        <Image
                            source={require('../assets/icons/check.png')}
                            style={{ width: 40, height: 40, margin: 7 }}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#201F1B',
        flex: 1,
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'MPLUSRounded1c-Bold',
        position: 'absolute',
        top: 55,
        left: '4%',
        zIndex: 1,
        fontSize: 38,
        color: '#FECA5D',
        letterSpacing: 4,
    },
    subText: {
        fontFamily: 'MPLUSRounded1c-Regular',
        color: 'white',
        fontSize: 20,
        top: -10,
        marginBottom: 10,
    },
    button: {
        height: 65,
        width: '100%',
        paddingHorizontal: 15,
        // justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FECA5D',
        borderRadius: 7,
    },
    buttonText: {
        fontFamily: 'MPLUSRounded1c-Medium',
        color: '#372D35',
        fontSize: 22,
        width: '85%',
    },
})

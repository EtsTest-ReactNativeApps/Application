import React from 'react'
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
} from 'react-native'
import { CommonActions } from '@react-navigation/native'

const CustomerList = ({ navigation, route }) => {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#201F1B',
                flex: 1,
            }}
        >
            <StatusBar barStyle='light-content' backgroundColor='#201F1B' />
            <Text style={styles.heading}>Available Rides</Text>

            <TouchableNativeFeedback
                onPress={() =>
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                {
                                    name: 'MainScreen',
                                    params: { ride: true },
                                },
                            ],
                        })
                    )
                }
            >
                <View
                    style={{
                        height: 90,
                        width: '85%',
                        backgroundColor: '#feca5d',

                        alignSelf: 'center',
                        borderRadius: 7,
                        justifyContent: 'space-around',
                        paddingTop: 5,
                        marginBottom: 30,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'MPLUSRounded1c-Bold',
                            fontSize: 21,
                            color: '#372D35',
                            letterSpacing: 1,
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }}
                    >
                        Jerry
                    </Text>
                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            // alignSelf: 'center',
                            marginLeft: 2,
                            borderRadius: 5,
                            backgroundColor: 'black',
                        }}
                    ></View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'MPLUSRounded1c-Medium',
                                color: '#372D35',
                                fontSize: 21,
                                letterSpacing: 1,
                                textTransform: 'uppercase',
                                width: '100%',
                                flex: 1,
                                textAlign: 'center',
                                paddingHorizontal: 8,
                            }}
                            // numberOfLines={1}
                        >
                            Electronic city
                        </Text>
                        <View
                            style={{
                                width: 1,
                                height: '100%',
                                backgroundColor: 'black',
                            }}
                        ></View>
                        <Text
                            style={{
                                fontFamily: 'MPLUSRounded1c-Medium',
                                color: '#372D35',
                                fontSize: 21,
                                letterSpacing: 1.5,
                                textTransform: 'uppercase',
                                width: '100%',
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            Indranagar
                        </Text>
                        {/* <Pressable>
                        <Image
                            source={icons.check}
                            style={{ height: 30, width: 30 }}
                        />
                    </Pressable> */}
                    </View>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={() =>
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                {
                                    name: 'MainScreen',
                                    params: { ride: true },
                                },
                            ],
                        })
                    )
                }
            >
                <View
                    style={{
                        height: 90,
                        width: '85%',
                        backgroundColor: '#feca5d',

                        alignSelf: 'center',
                        borderRadius: 7,
                        justifyContent: 'space-around',
                        paddingTop: 5,
                        marginBottom: 30,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'MPLUSRounded1c-Bold',
                            fontSize: 21,
                            color: '#372D35',
                            letterSpacing: 1,
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }}
                    >
                        Bob
                    </Text>
                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            // alignSelf: 'center',
                            marginLeft: 2,
                            borderRadius: 5,
                            backgroundColor: 'black',
                        }}
                    ></View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'MPLUSRounded1c-Medium',
                                color: '#372D35',
                                fontSize: 21,
                                letterSpacing: 1.5,
                                textTransform: 'uppercase',
                                width: '100%',
                                flex: 1,
                                textAlign: 'center',
                            }}
                            // numberOfLines={1}
                        >
                            Banashankri
                        </Text>
                        <View
                            style={{
                                width: 1,
                                height: '100%',
                                backgroundColor: 'black',
                            }}
                        ></View>
                        <Text
                            style={{
                                fontFamily: 'MPLUSRounded1c-Medium',
                                color: '#372D35',
                                fontSize: 21,
                                letterSpacing: 1.5,
                                textTransform: 'uppercase',
                                width: '100%',
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            M G Road
                        </Text>
                        {/* <Pressable>
                        <Image
                            source={icons.check}
                            style={{ height: 30, width: 30 }}
                        />
                    </Pressable> */}
                    </View>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={() =>
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                {
                                    name: 'MainScreen',
                                    params: { ride: true },
                                },
                            ],
                        })
                    )
                }
            >
                <View
                    style={{
                        height: 90,
                        width: '85%',
                        backgroundColor: '#feca5d',

                        alignSelf: 'center',
                        borderRadius: 7,
                        justifyContent: 'space-around',
                        paddingTop: 5,
                        marginBottom: 30,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'MPLUSRounded1c-Bold',
                            fontSize: 21,
                            color: '#372D35',
                            letterSpacing: 1,
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }}
                    >
                        Jenny
                    </Text>
                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            // alignSelf: 'center',
                            marginLeft: 2,
                            borderRadius: 5,
                            backgroundColor: 'black',
                        }}
                    ></View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'MPLUSRounded1c-Medium',
                                color: '#372D35',
                                fontSize: 21,
                                letterSpacing: 1.5,
                                textTransform: 'uppercase',
                                width: '100%',
                                flex: 1,
                                textAlign: 'center',
                            }}
                            // numberOfLines={1}
                        >
                            Cubbon Park
                        </Text>
                        <View
                            style={{
                                width: 1,
                                height: '100%',
                                backgroundColor: 'black',
                            }}
                        ></View>
                        <Text
                            style={{
                                fontFamily: 'MPLUSRounded1c-Medium',
                                color: '#372D35',
                                fontSize: 21,
                                letterSpacing: 1.5,
                                textTransform: 'uppercase',
                                width: '100%',
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            Majestic
                        </Text>
                        {/* <Pressable>
                        <Image
                            source={icons.check}
                            style={{ height: 30, width: 30 }}
                        />
                    </Pressable> */}
                    </View>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={() =>
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                {
                                    name: 'MainScreen',
                                    params: { ride: true },
                                },
                            ],
                        })
                    )
                }
            >
                <View
                    style={{
                        height: 90,
                        width: '85%',
                        backgroundColor: '#feca5d',

                        alignSelf: 'center',
                        borderRadius: 7,
                        justifyContent: 'space-around',
                        paddingTop: 5,
                        marginBottom: 30,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'MPLUSRounded1c-Bold',
                            fontSize: 21,
                            color: '#372D35',
                            letterSpacing: 1,
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }}
                    >
                        Tom
                    </Text>
                    <View
                        style={{
                            width: '100%',
                            height: 1,
                            // alignSelf: 'center',
                            marginLeft: 2,
                            borderRadius: 5,
                            backgroundColor: 'black',
                        }}
                    ></View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'MPLUSRounded1c-Medium',
                                color: '#372D35',
                                fontSize: 21,
                                letterSpacing: 1.5,
                                textTransform: 'uppercase',
                                width: '100%',
                                flex: 1,
                                textAlign: 'center',
                            }}
                        >
                            Lal Bagh
                        </Text>
                        <View
                            style={{
                                width: 1,
                                height: '100%',
                                backgroundColor: 'black',
                            }}
                        ></View>
                        <Text
                            style={{
                                fontFamily: 'MPLUSRounded1c-Medium',
                                color: '#372D35',
                                fontSize: 21,
                                letterSpacing: 1.5,
                                textTransform: 'uppercase',
                                width: '100%',
                                textAlign: 'center',
                                flex: 1,
                            }}
                        >
                            H A L
                        </Text>
                        {/* <Pressable>
                        <Image
                            source={icons.check}
                            style={{ height: 30, width: 30 }}
                        />
                    </Pressable> */}
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default CustomerList

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'MPLUSRounded1c-Bold',
        position: 'absolute',
        top: 65,
        left: '5%',
        zIndex: 1,
        fontSize: 35,
        color: '#fbca5d',
        letterSpacing: 3,
        textTransform: 'uppercase',
        // textAlign: '',
    },
})

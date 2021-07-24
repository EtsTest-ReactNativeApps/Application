import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { images } from '../constants'
import { CommonActions } from '@react-navigation/native'

const LoadingDriver = ({ navigation, route }) => {
    const [isAvailable, setIsAvailable] = React.useState(true)
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#201F1B',
                flex: 1,
            }}
        >
            <View
                style={{
                    height: 120,
                    width: 120,
                    borderRadius: 80,
                    backgroundColor: '#eaca5d',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 10,
                    marginBottom: 30,
                }}
            >
                <Image
                    source={images.carBig}
                    style={{ height: 100, width: 100, resizeMode: 'contain' }}
                />
            </View>
            <Pressable
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
                <Text
                    style={{
                        fontFamily: 'MPLUSRounded1c-Bold',
                        fontSize: 25,
                        color: '#fbca5d',
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                    }}
                >
                    Searching for rides...
                </Text>
            </Pressable>

            <Pressable
                onPress={() => {
                    setIsAvailable(!isAvailable)
                }}
                style={{ position: 'absolute', bottom: 20, left: 0 }}
            >
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
                        }}
                    >
                        <View
                            style={{
                                height: 13,
                                width: 13,
                                borderRadius: 20,

                                backgroundColor: isAvailable
                                    ? '#FECA5D'
                                    : 'transparent',
                            }}
                        ></View>
                    </View>
                    <Text style={styles.subText}>
                        Are you Available right now?
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default LoadingDriver

const styles = StyleSheet.create({
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
})

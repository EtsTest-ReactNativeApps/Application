import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { images } from '../constants'
import { CommonActions } from '@react-navigation/native'

const Loading = ({ navigation, route }) => {
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
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})

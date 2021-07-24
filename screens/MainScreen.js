import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Alert,
    StatusBar,
    TextInput,
    Pressable,
} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import Geolocation from 'react-native-geolocation-service'
import { CommonActions } from '@react-navigation/native'
import {
    COLORS,
    FONTS,
    images,
    icons,
    SIZES,
    GOOGLE_API_KEY,
} from '../constants'
import react from 'react'

const MainScreen = ({ route, navigation }) => {
    const mapView = React.useRef()
    console.log(route)
    // const [restaurant, setRestaurant] = React.useState(null);
    const [streetName, setStreetName] = React.useState('')
    const [fromLocation, setFromLocation] = React.useState({
        latitude: 12.922013443025244,
        longitude: 77.56766124780178,
    })
    const [toLocation, setToLocation] = React.useState({
        latitude: 12.907013443025244,
        longitude: 77.5646124780178,
    })
    const [region, setRegion] = React.useState(null)
    const [rideFound, setrideFound] = React.useState(false)
    const [duration, setDuration] = React.useState(0)
    const [isReady, setIsReady] = React.useState(false)
    const [angle, setAngle] = React.useState(0)
    React.useEffect(() => {
        setrideFound(route.params.ride)
        let fromLoc = {
            latitude: 12.922013443025244,
            longitude: 77.56766124780178,
        } //currentLocation.gps;
        let toLoc = {
            latitude: 12.907013443025244,
            longitude: 77.5646124780178,
        } //restaurant.location;
        let street = 'Bangalore'

        // let mapRegion = {
        //   latitude: (fromLoc.latitude + toLoc.latitude) / 2,
        //   longitude: (fromLoc.longitude + toLoc.longitude) / 2,
        //   latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
        //   longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
        // };
        // console.log(toLoc);
        // setRestaurant('Pizza Hut');
        setStreetName(street)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setTimeout(() => {
            Geolocation.getCurrentPosition(
                (position) => {
                    setToLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    })
                    console.log(position)
                },
                (error) => {
                    Alert.alert(error.message.toString())
                },
                {
                    showLocationDialog: true,
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 0,
                }
            )
        }, 0)
    }, [])

    react.useEffect(() => {
        let fromLoc = {
            latitude: 12.922013443025244,
            longitude: 77.56766124780178,
        }
        let toLoc = {
            latitude: 12.907013443025244,
            longitude: 77.5646124780178,
        } //restaurant.location;
        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
        }
        setRegion(mapRegion)
        // console.log(mapRegion);
    }, [toLocation])

    function calculateAngle(coordinates) {
        let startLat = coordinates[0]['latitude']
        let startLng = coordinates[0]['longitude']
        let endLat = coordinates[1]['latitude']
        let endLng = coordinates[1]['longitude']
        let dx = endLat - startLat
        let dy = endLng - startLng

        return (Math.atan2(dy, dx) * 180) / Math.PI
    }

    function zoomIn() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2,
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    function zoomOut() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2,
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    function renderMap() {
        const destinationMarker = () => (
            <Marker
                coordinate={toLocation}
                draggable
                onDragEnd={(e) => {
                    console.log(e.nativeEvent)
                }}
            >
                <Image
                    source={icons.pin}
                    style={{
                        width: 36,
                        height: 36,
                        tintColor: '#FECA5D',
                    }}
                />
            </Marker>
        )

        const carIcon = () => (
            <Marker
                coordinate={fromLocation}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
                rotation={angle}
            >
                <Image
                    source={icons.car}
                    style={{
                        width: 40,
                        height: 40,
                    }}
                />
            </Marker>
        )

        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    translucent={true}
                    // barStyle="light-content"
                    backgroundColor='#201F1B'
                />

                <MapView
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    customMapStyle={[
                        {
                            featureType: 'all',
                            elementType: 'all',
                            stylers: [
                                {
                                    invert_lightness: true,
                                },
                                {
                                    saturation: '0',
                                },
                                {
                                    lightness: '33',
                                },
                                {
                                    gamma: 0.5,
                                },
                                {
                                    hue: '#ffcc00',
                                },
                                {
                                    weight: '1.51',
                                },
                            ],
                        },
                        {
                            featureType: 'transit.station.rail',
                            elementType: 'labels.text',
                            stylers: [
                                {
                                    gamma: '1.00',
                                },
                            ],
                        },
                        {
                            featureType: 'transit.station.rail',
                            elementType: 'labels.text.fill',
                            stylers: [
                                {
                                    hue: '#ff0000',
                                },
                                {
                                    lightness: '42',
                                },
                            ],
                        },
                        {
                            featureType: 'transit.station.rail',
                            elementType: 'labels.icon',
                            stylers: [
                                {
                                    hue: '#ff0000',
                                },
                                {
                                    invert_lightness: true,
                                },
                                {
                                    lightness: '-15',
                                },
                                {
                                    saturation: '31',
                                },
                            ],
                        },
                    ]}
                    style={{ flex: 1 }}
                >
                    {/* <MapViewDirections
            origin={fromLocation}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
            onReady={result => {
              setDuration(result.duration);

              if (!isReady) {
                // Fit route into maps
                mapView.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: SIZES.width / 20,
                    bottom: SIZES.height / 4,
                    left: SIZES.width / 20,
                    top: SIZES.height / 8,
                  },
                });

                // Reposition the car
                let nextLoc = {
                  latitude: result.coordinates[0]['latitude'],
                  longitude: result.coordinates[0]['longitude'],
                };

                if (result.coordinates.length >= 2) {
                  let angle = calculateAngle(result.coordinates);
                  setAngle(angle);
                }

                setFromLocation(nextLoc);
                setIsReady(true);
              }
            }}
          /> */}
                    {destinationMarker()}
                    {carIcon()}
                </MapView>
            </View>
        )
    }
    function enterRideDetails() {
        return (
            <View
                style={{
                    height: 100,
                    width: '85%',
                    backgroundColor: '#feca5d',
                    position: 'absolute',
                    bottom: 30,
                    alignSelf: 'center',
                    borderRadius: 7,
                    justifyContent: 'space-around',
                    paddingTop: 10,
                    paddingLeft: 20,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'MPLUSRounded1c-Bold',
                        fontSize: 21,
                        color: '#372D35',
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                    }}
                >
                    Current Location
                </Text>
                <View
                    style={{
                        width: '80%',
                        height: 1,
                        // alignSelf: 'center',
                        marginTop: 5,
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
                    <TextInput
                        style={{
                            fontFamily: 'MPLUSRounded1c-Medium',
                            color: '#372D35',
                            fontSize: 21,
                            letterSpacing: 1.5,
                            textTransform: 'uppercase',
                            width: '100%',
                        }}
                        placeholder='WHERE TO?'
                        // onChangeText={text => console.log(text)}
                        onEndEditing={() => navigation.navigate('Loading')}
                        // onChangeText={text => ingredientInput(text, key)}
                    />
                    {/* <Pressable>
                        <Image
                            source={icons.check}
                            style={{ height: 30, width: 30 }}
                        />
                    </Pressable> */}
                </View>
            </View>
        )
    }

    function renderDestinationHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    right: 0,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: '#FECA5D',
                    }}
                >
                    <Image
                        source={icons.red_pin}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10,
                        }}
                    />

                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                fontFamily: 'MPLUSRounded1c-Medium',
                                fontSize: 18,
                                letterSpacing: 0.75,
                                color: '#444444',
                            }}
                        >
                            Dayananda Sagar, Banashankri
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderDeliveryInfo() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding * 3,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: 7,
                        backgroundColor: '#FECA5D',
                        height: 200,
                    }}
                >
                    <View
                        style={{
                            height: 85,
                            width: 85,
                            backgroundColor: '#FECA5D',
                            position: 'relative',
                            top: -80,
                            left: 0,
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: '#444444',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            source={images.avatar_4}
                            style={{ height: 90, width: 90, marginTop: 10 }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            position: 'relative',
                            top: -75,
                        }}
                    >
                        {/* Avatar */}

                        <View style={{ flex: 1, marginLeft: SIZES.padding }}>
                            {/* Name & Rating */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#201f1b',
                                        fontFamily: 'MPLUSRounded1c-ExtraBold',
                                        fontSize: 23,
                                        letterSpacing: 0.75,
                                    }}
                                >
                                    Mr. Nakamoto
                                </Text>

                                <Text
                                    style={{
                                        ...FONTS.body3,
                                        color: '#201f1b',
                                        fontFamily: 'MPLUSRounded1c-ExtraBold',
                                        fontSize: 23,
                                        paddingTop: 11,
                                        letterSpacing: 1,
                                    }}
                                >
                                    JK 4093
                                </Text>
                            </View>

                            {/* Restaurant */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#444444',
                                        fontFamily: 'MPLUSRounded1c-Medium',
                                        fontSize: 19,
                                        letterSpacing: 1,
                                    }}
                                >
                                    (4.7★)
                                </Text>
                                <Text
                                    style={{
                                        color: '#444444',
                                        fontFamily: 'MPLUSRounded1c-Medium',
                                        fontSize: 21,
                                        letterSpacing: 1,
                                    }}
                                >
                                    Ford Fiesta
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Buttons */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding * 2,
                            justifyContent: 'space-between',
                            position: 'relative',
                            top: -75,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                marginRight: 10,
                                backgroundColor: '#756F6F',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 7,
                            }}
                            onPress={() => {
                                setrideFound(false)
                                // navigation.dispatch(
                                //     CommonActions.reset({
                                //         index: 1,
                                //         routes: [
                                //             {
                                //                 name: 'MainScreen',
                                //                 params: { ride: false },
                                //             },
                                //         ],
                                //     })
                                // )
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'MPLUSRounded1c-Medium',
                                    fontSize: 21,
                                    color: '#feca5d',
                                    letterSpacing: 2.5,
                                }}
                            >
                                CANCEL
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                backgroundColor: '#25241D',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 7,
                            }}
                            onPress={() => {}}
                        >
                            <Text
                                style={{
                                    fontFamily: 'MPLUSRounded1c-Medium',
                                    fontSize: 21,
                                    color: '#feca5d',
                                    letterSpacing: 2.5,
                                }}
                            >
                                CALL
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: SIZES.height * 0.35,
                    right: SIZES.padding,
                    width: 60,
                    height: 130,
                    justifyContent: 'space-between',
                }}
            >
                {/* Zoom In */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        backgroundColor: '#FECA5D',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => zoomIn()}
                >
                    <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>

                {/* Zoom Out */}
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        backgroundColor: '#FECA5D',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => zoomOut()}
                >
                    <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderMap()}
            {!rideFound ? enterRideDetails() : null}
            {rideFound ? renderDestinationHeader() : null}
            {rideFound ? renderDeliveryInfo() : null}
            {renderButtons()}
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        flex: 1,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
    },
})

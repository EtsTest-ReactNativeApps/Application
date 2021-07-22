import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>On Boarding</Text>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#201F1B', //1C1C19
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
});

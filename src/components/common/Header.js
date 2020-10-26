/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Header = ({headerText}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}> {headerText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
  text: {
    fontSize: 20,
  },
});

export {Header};

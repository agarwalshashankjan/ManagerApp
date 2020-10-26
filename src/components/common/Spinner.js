import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size={size || 'large'} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Spinner};

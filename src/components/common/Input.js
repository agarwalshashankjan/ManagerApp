import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {Input};

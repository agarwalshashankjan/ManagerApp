import React from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

const ListItem = ({item}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Actions.employeeEdit({employee: item})}>
      <View>
        <CardSection>
          <Text style={styles.text}>{item.name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default ListItem;

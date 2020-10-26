import React from 'react';
import {CardSection, Input} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Picker, Text, StyleSheet, View} from 'react-native';

const EmployeeForm = (props) => {
  const {name, phone, shift, employeeUpdate} = props;

  return (
    <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="Ram"
          value={name}
          onChangeText={(text) => employeeUpdate('name', text)}
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="9999-999-999"
          value={phone}
          onChangeText={(text) => employeeUpdate('phone', text)}
        />
      </CardSection>
      <CardSection>
        <Text style={styles.text}>Shift</Text>
        <Picker
          style={{flex: 2.5}}
          mode="dropdown"
          selectedValue={shift}
          onValueChange={(day) => employeeUpdate('shift', day)}>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
  },
});

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.empForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, actions)(EmployeeForm);

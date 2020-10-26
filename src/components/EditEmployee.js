import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {Card, CardSection, Button, Confirm} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';

const EditEmployee = (props) => {
  const {
    name,
    phone,
    shift,
    employee,
    employeeUpdate,
    employeeSave,
    employeeDelete,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    _.each(employee, (value, prop) => {
      employeeUpdate(prop, value);
    });
  }, []);

  const onSave = () => {
    employeeSave(name, phone, shift, employee.id);
  };

  const textSchedule = () => {
    Communications.text(phone, `Your New schedule is on ${shift}`);
  };

  const onAccept = () => {
    employeeDelete(employee.id);
  };

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button title="Save" onPress={onSave} />
      </CardSection>
      <CardSection>
        <Button title="Text New Schedule" onPress={textSchedule} />
      </CardSection>
      <CardSection>
        <Button title="Fire?" onPress={() => setModalVisible(!modalVisible)} />
      </CardSection>
      <Confirm
        visible={modalVisible}
        onAccept={onAccept}
        onDecline={() => setModalVisible(!modalVisible)}>
        Are you sure to Fire this Employee?
      </Confirm>
    </Card>
  );
};

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.empForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, actions)(EditEmployee);

import React from 'react';
import {Card, CardSection, Button} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';

const CreateEmployee = (props) => {
  const {name, phone, shift, employeeCreate} = props;

  const onButtonPress = () => {
    employeeCreate(name, phone, shift);
  };

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button title="Create" onPress={onButtonPress} />
      </CardSection>
    </Card>
  );
};

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.empForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, actions)(CreateEmployee);

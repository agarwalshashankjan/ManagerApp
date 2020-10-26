import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ListItem from './ListItem';

const Employees = ({employees, employeeFetch, employeeReset}) => {
  useEffect(() => {
    employeeFetch();
    employeeReset();
  }, []);

  return (
    <FlatList
      data={employees}
      keyExtractor={(employee) => employee.id}
      renderItem={({item}) => <ListItem item={item} />}
    />
  );
};

const mapStateToProps = (state) => {
  return {employees: state.employees};
};

export default connect(mapStateToProps, actions)(Employees);

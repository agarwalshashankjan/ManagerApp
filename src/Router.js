import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {firebase} from './firebase';
import LoginForm from './components/LoginForm';
import Employees from './components/Employees';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';
import CheckLogin from './components/CheckLogin';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar headerLayoutPreset={'center'}>
        <Scene key="Start">
          <Scene key="checkUser" component={CheckLogin} initial />
        </Scene>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Log In" />
        </Scene>
        <Scene key="main">
          <Scene
            key="employees"
            component={Employees}
            title="Employees"
            rightTitle="Log Out"
            onRight={() => {
              // Logout Code
              firebase.auth().signOut();
            }}
            leftTitle="Add"
            onLeft={() => {
              Actions.employeeCreate();
            }}
            initial
          />
          <Scene
            key="employeeCreate"
            component={CreateEmployee}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EditEmployee}
            title="Edit Employee"
            back
            onBack={() => Actions.employees()}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

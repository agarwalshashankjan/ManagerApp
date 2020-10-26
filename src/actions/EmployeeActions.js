import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = (prop, value) => {
  return {
    type: 'employee_update',
    payload: {prop, value},
  };
};

export const employeeCreate = (name, phone, shift) => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({
          type: 'employee_created',
        });
        Actions.pop();
      });
  };
};

export const employeeFetch = () => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        // convert firebase fbObject to Array newArray
        const fbObject = snapshot.val();
        const newArray = Object.keys(fbObject).map((key) => {
          fbObject[key].id = key;
          return fbObject[key];
        });
        dispatch({
          type: 'fetch_success',
          payload: newArray,
        });
      });
  };
};

export const employeeSave = (name, phone, shift, uid) => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        console.log('here');
        dispatch({
          type: 'employee_saved',
        });
        Actions.pop();
      });
  };
};

export const employeeDelete = (uid) => {
  return (dispatch) => {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => Actions.pop());
  };
};

export const employeeReset = () => {
  return (dispatch) => {
    console.log('dispatched');
    dispatch({type: 'reset'});
  };
};

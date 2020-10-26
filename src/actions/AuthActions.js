import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'password_changed',
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: 'logging'});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({type: 'login_success', payload: user});
        Actions.main();
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            dispatch({type: 'login_success', payload: user});
            Actions.main();
          })
          .catch(() => dispatch({type: 'login_fail'}));
      });
  };
};

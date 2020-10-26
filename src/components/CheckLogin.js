import React, {useState, useEffect} from 'react';
import {firebase} from '../firebase';
import {Actions} from 'react-native-router-flux';
import {Spinner} from './common';

const CheckLogin = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(currentUser) {
    setUser(currentUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    Actions.auth();
  } else {
    Actions.main();
  }
  return <Spinner />;
};

export default CheckLogin;

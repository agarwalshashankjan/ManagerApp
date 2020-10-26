import React from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';
import * as actions from '../actions';
import {View, Text, StyleSheet} from 'react-native';

const LoginForm = ({
  email,
  password,
  loading,
  error,
  emailChanged,
  passwordChanged,
  loginUser,
}) => {
  const onEmailChange = (text) => {
    emailChanged(text);
  };
  const onPasswordChange = (text) => {
    passwordChanged(text);
  };

  const onLogin = () => {
    loginUser({email, password});
  };

  const renderError = () => {
    if (error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.error}>{error}</Text>
        </View>
      );
    }
  };

  const onRenderButton = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return <Button title="Login" onPress={onLogin} />;
    }
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="email"
          placeholder="abc@abc.com"
          onChangeText={onEmailChange}
          value={email}
        />
      </CardSection>
      <CardSection>
        <Input
          label="password"
          secureTextEntry
          onChangeText={onPasswordChange}
          value={password}
        />
      </CardSection>
      {renderError()}
      <CardSection>{onRenderButton()}</CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, actions)(LoginForm);

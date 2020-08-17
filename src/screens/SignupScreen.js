import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        onSubmit={signup}
        errorMessage={state.errorMessage}
        headerText="Sign Up"
        submitButtonText="Submit"
      />
      <NavLink routeName="Signin" text="Sign In" />
    </View>
  );
};

SignupScreen.navigationOptions = () => ({
  headerShown: false,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
    marginTop: 100,
  },
});

export default SignupScreen;

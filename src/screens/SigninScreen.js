import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        onSubmit={signin}
        errorMessage={state.errorMessage}
        headerText="Sign In"
        submitButtonText="Submit"
      />
      <NavLink routeName="Signup" text="Sign Up" />
    </View>
  );
};

SigninScreen.navigationOptions = () => ({
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

export default SigninScreen;

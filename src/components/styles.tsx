import styled from 'styled-components/native';
import Constants from 'expo-constants';

const React = require("react-native");

const { StyleSheet } = React;

const StatusBarHeight = Constants.StatusBarHeight;

const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      alignItems: "center"
    },
    loginScreenContainer: {
      flex: 1,
    },
    logoText: {
      fontSize: 40,
      fontWeight: "800",
      marginTop: 150,
      marginBottom: 30,
      textAlign: "center",
    },
    loginFormView: {
      flex: 1,
    },
    loginFormTextInput: {
      height: 43,
      fontSize: 14,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#eaeaea",
      backgroundColor: "#fafafa",
      paddingLeft: 10,
      marginTop: 5,
      marginBottom: 5,
    },
    loginButton: {
      backgroundColor: "#3897f1",
      borderRadius: 5,
      height: 45,
      marginTop: 10,
      width: 350,
      alignItems: "center"
    },
    worktypesbutton: {
      backgroundColor: "red",
      borderRadius: 10,
      height: 50,
      marginTop: 10,
      marginLeft: 15,
      width: 120,
      alignment: "left"
    },
    fbLoginButton: {
      height: 45,
      marginTop: 10,
      backgroundColor: 'transparent',
    },
  });
  export default styles;
  

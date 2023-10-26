import React from 'react';
import { Link, useNavigation, useRouter } from 'expo-router';
import styles from "../../src/components/styles";

import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Button,
    StyleSheet
  } from "react-native";

  // import { Button, SocialIcon } from "react-native-elements";
  // import { Button, SocialIcon } from '@rneui/themed'

  const appId = "1047121222092614";

  export default function LoginScreen() {

    const router = useRouter();

    const onLoginPress = () => { router.push("/front") };

    const onWorktypesPress = () => { router.push("/worktypes") }

    const onUserInfoPress = () => { router.push("/userinfo") }
  
    const onFbLoginPress = async () => {
      Alert.alert(
        `Please use our React Native Starer Kit instead. You can download it for free at https://instamobile.io`
      );
    };

    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            {/* <View style={styles.loginFormView}> */}
              <Text style={styles.logoText}>Instamobile</Text>
              <TextInput
                placeholder="Username"
                //placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Password"
                //placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
              />
              <Button
                onPress={() => onLoginPress()}
                title="Login"
              />
              {/* <View style={{flexDirection: 'row', flexWrap: 'wrap',}}> */}
              {/* <View style={stylesA.container}> */}
                <Button
                  onPress={() => onUserInfoPress()}
                  
                  title="User Info"
                />
                <Button
                  onPress={() => onWorktypesPress()}
                  title="Work Types"
                />
              {/* </View> */}
            <Button
              onPress={() => onFbLoginPress()}
              title="Login With Facebook"
            />
            {/* </View> */}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  const stylesA = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: '15%',
        backgroundColor: '#c8c8c8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    boldtext: {
        fontWeight: 'bold',
        fontSize: 14
    },
    body: {
        backgroundColor: 'yellow',
        padding: 20
    }
});

  

/* eslint-disable no-useless-escape */
/* eslint-disable react-native/no-inline-styles */
import {Input, Button, Text} from 'native-base';
import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Login} from '../store/auth/actions';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validUser, setValidUser] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const dispatch: any = useDispatch();

  const submitBtn = () => {
    if (!validUser && !validPassword) {
      Alert.alert('Email and password is not correct');
    } else if (!validUser) {
      Alert.alert('Email is not correct');
    } else if (!validPassword) {
      Alert.alert('Password is not correct');
    } else {
      setIsLoading(true);
      dispatch(Login(username));
      setIsLoading(false);
    }
  };

  const validateLogin = (text: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setUsername(text);
      setValidUser(false);
      return false;
    } else {
      setValidUser(true);
      setUsername(text);
    }
  };

  const validatePassword = (text: string) => {
    if (text.length < 8) {
      setPassword(text);
      setValidPassword(false);
    } else {
      setPassword(text);
      setValidPassword(true);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Input
        borderRadius="10"
        mt="2"
        placeholder="Email"
        w="50%"
        value={username}
        onChangeText={text => validateLogin(text)}
      />
      {validUser || username.length < 1 ? (
        <Text />
      ) : (
        <Text color="red.400">Email is not correct.</Text>
      )}
      <Input
        borderRadius="10"
        mt="2"
        placeholder="Password"
        w="50%"
        value={password}
        type="password"
        onChangeText={text => validatePassword(text)}
      />
      {validPassword || password.length < 1 || password.length > 7 ? (
        <Text />
      ) : (
        <Text color="red.400">
          Password is not correct you need {8 - password.length} more
          characters.
        </Text>
      )}
      <Button
        disabled={isLoading}
        bgColor="#0081B4"
        mt="2"
        borderRadius="10"
        onPress={submitBtn}>
        {isLoading ? 'Loading...' : 'Login'}
      </Button>
    </View>
  );
}

export default LoginPage;

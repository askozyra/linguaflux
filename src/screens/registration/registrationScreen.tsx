import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import { RootStackProps } from '../../types/rootStackProps';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import * as firebase from '../../firebase/config';
import * as Kitten from '@ui-kitten/components';
import Input from '../../components/common/input/Input';
import { ScreenStyles } from '../../components/commonStyles/styles';
import { RegistrationStyles } from './registrationScreen.styles';

const RegistrationScreen = ({ navigation }: NativeStackScreenProps<RootStackProps, 'Registration'>) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const tryToRegister = () => {
    firebase.app.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        firebase.database().ref('/users/' + response.user.uid).set({ 'dictionaries': [], 'details': { 'username': fullName } });
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dictionaries' }]
        });
      });
  }

  const validateFields = () => {
    if (!email || !password || !confirmPassword)
      throw new Error('All required fields should be filled');
    if (password != confirmPassword)
      throw new Error('Passwords should match');
  }

  const onSubmit = () => {
    validateFields();
    tryToRegister();
  }

  return (
    <Kitten.Layout style={ScreenStyles.Layout}>
      <View style={RegistrationStyles.InnerLayout}>
        <Input
          label={'Nickname'}
          placeholder="nickname"
          textValueChanged={(value: string) => setFullName(value)}
        />
        <Input
          label={'Login'}
          placeholder="email"
          textContentType='username'
          textValueChanged={(value: string) => setEmail(value)}
          required
        />
        <Input
          label={'Password'}
          placeholder="password"
          textContentType='password'
          textValueChanged={(value: string) => setPassword(value)}
          allowHideText
          required
        />
        <Input
          label={'Confirm password'}
          placeholder="confirm password"
          textContentType='password'
          textValueChanged={(value: string) => setConfirmPassword(value)}
          allowHideText
          required
        />
        <Kitten.Button
          onPress={onSubmit} appearance='outline' status='primary'>
          <Kitten.Text>
            Register
          </Kitten.Text>
        </Kitten.Button>
        <View style={RegistrationStyles.LoginRefWRapper}>
          <Kitten.Text>Have an account?</Kitten.Text>
          <Kitten.Text style={RegistrationStyles.LoginRefLinkSpan} onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}>Sign In</Kitten.Text>
        </View>
      </View>
    </Kitten.Layout >
  );
}

export default RegistrationScreen;
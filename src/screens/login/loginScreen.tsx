import {
  View,
} from 'react-native';
import * as Kitten from '@ui-kitten/components';
import * as firebase from '../../firebase/config';
import Input from '../../components/common/input/Input';
import { useState } from 'react';
import { LoginStyles } from './loginScreen.styles';
import { RootStackProps } from '../../types/rootStackProps';
import { ScreenStyles } from '../../components/commonStyles/styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const LoginScreen = ({ navigation }: NativeStackScreenProps<RootStackProps, 'Login'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  }

  const tryToLogin = () => {
    firebase.app.auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dictionaries' }],
        })
      });
  }

  const validateFields = () => {
    if (!email || !password)
      throw new Error('Required fields should be filled');
  }

  const onSubmit = () => {
    validateFields();
    tryToLogin();
  }

  return (
    <Kitten.Layout style={ScreenStyles.Layout}>
      <View style={LoginStyles.InnerLayout}>
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
        <View style={LoginStyles.RememberMeRowOuterWrapper}>
          <View style={LoginStyles.RememberMeRowInnerWrapper}>
            <Kitten.CheckBox
              checked={rememberMe}
              onChange={value => setRememberMe(value)}
            />
            <Kitten.Text onPress={toggleRememberMe}>Remember Me</Kitten.Text>
          </View>
        </View>
        <Kitten.Button onPress={onSubmit} appearance='outline'>
          <Kitten.Text>
            Log In
          </Kitten.Text>
        </Kitten.Button>
        <View style={LoginStyles.RegistrationRefWRapper}>
          <Kitten.Text>Don't have an account?</Kitten.Text>
          <Kitten.Text
            style={LoginStyles.RegistrationRefLinkSpan}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Registration' }],
              });
            }}>Sign Up</Kitten.Text>
        </View>
      </View>
    </Kitten.Layout>
  );
}

export default LoginScreen;
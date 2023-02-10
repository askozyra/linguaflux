import {
  TextInput,
  Button,
  View,
} from 'react-native';
import { RootStackProps } from '../../types/rootStackProps';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const LoginScreen = ({ navigation, route }: NativeStackScreenProps<RootStackProps, 'Login'>) => {
  return (
    <View>
      <TextInput
        placeholder="email"
      />
      <TextInput
        placeholder="password"
      />
      <Button title='Register' onPress={() => {
        navigation.navigate('Registration');
      }}
      />
    </View>
  )
}

export default LoginScreen;
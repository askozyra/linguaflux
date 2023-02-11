import {
  TextInput,
  Button,
  View,
} from 'react-native';
import { RootStackProps } from '../../types/rootStackProps';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const RegistrationScreen = ({ navigation }: NativeStackScreenProps<RootStackProps, 'Registration'>) => {
  return (
    <View>
      <TextInput
        placeholder="email"
      />
      <TextInput
        placeholder="password"
      />
      <Button title='Login' onPress={() => { navigation.navigate('Login'); }}></Button>
    </View>
  )
}

export default RegistrationScreen;
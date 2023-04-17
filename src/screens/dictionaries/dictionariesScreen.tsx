import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { RootStackProps } from '../../types/rootStackProps';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';

const DictionariesScreen = ({ navigation, route }: NativeStackScreenProps<RootStackProps, 'Dictionaries'>) => {

  return (
    <ScrollView
      style={{
        backgroundColor: '#777'
      }}>
      <Text>Dictionaries</Text>
    </ScrollView>
  )
}

export default DictionariesScreen;
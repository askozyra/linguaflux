import React from 'react';
import * as eva from '@eva-design/eva';
import Login from './src/screens/login/loginScreen';
import Registration from './src/screens/registration/registrationScreen';
import Dictionaries from './src/screens/dictionaries/dictionariesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackProps } from './src/types/rootStackProps';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { View } from 'react-native';
import { styles } from './App.styles';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './src/themes/eva/theme.json';

const Stack = createNativeStackNavigator<RootStackProps>();

function App(): JSX.Element {
  const backgroundCard = (
    <View style={styles.cardStyle} />
  );

  const navigation = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Dictionaries"
          component={Dictionaries}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <IconRegistry icons={EvaIconsPack} />
      {backgroundCard}
      {navigation}
    </ApplicationProvider>
  );
}

export default App;
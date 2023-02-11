import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackProps } from './src/types/rootStackProps';
import Login from './src/screens/login/loginScreen';
import Registration from './src/screens/registration/registrationScreen';

const Stack = createNativeStackNavigator<RootStackProps>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerLeft: () => (<></>)
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerLeft: () => (<></>)
          }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;
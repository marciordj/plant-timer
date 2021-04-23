import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/Screens/Welcome';
import UserIdentification from './src/Screens/UserIdentification';

const Stack = createStackNavigator();

// ! Lembra de instalar TODAS as dependencias do navigator

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" headerMode="none">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="UserIdentification"
          component={UserIdentification}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

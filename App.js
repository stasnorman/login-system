<<<<<<< HEAD
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PageMain } from './views/page-main';
import { PageUser } from './views/page-user';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Главная страница">
        <Stack.Screen options={{headerShown: true}} name="Главная страница" component={PageMain} />
        <Stack.Screen options={{headerShown: true}} name="Профиль пользователя" component={PageUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
=======
import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PageLogIn } from './pages/page-login';
import { PageUser } from './pages/page-main';
const Stack = createNativeStackNavigator();
>>>>>>> 49ef3c4 (Добавил GET и POST)

export default function App() {
  return (    
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Главная страница">
      <Stack.Screen options={{headerShown: true}} name="Главная страница" component={PageLogIn} />
      <Stack.Screen options={{headerShown: true}} name="Окно пользователя" component={PageUser} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> a26dcad (Initial commit)

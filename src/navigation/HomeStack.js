import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, About } from '../screens';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen
        name="about"
        component={About}
        options={{ title: 'About' }}
      />
    </Stack.Navigator>
  );
}

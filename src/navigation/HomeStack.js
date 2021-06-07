import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, About, Courses } from '../screens';

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => <Text onPress={navigation.openDrawer}>MENU</Text>,
          headerRight: () => <Text>POWER</Text>,
        }}
      />
      <Stack.Screen
        name="about"
        component={About}
        options={{ title: 'About' }}
      />
      <Stack.Screen
        name="courses"
        component={Courses}
        options={{ title: 'Courses' }}
      />
    </Stack.Navigator>
  );
}

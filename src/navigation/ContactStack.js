import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Contact, Courses } from '../screens';

const Stack = createStackNavigator();

export default function ContactStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{ title: 'Contact' }}
      />
      <Stack.Screen
        name="courses"
        component={Courses}
        options={{ title: 'Courses' }}
      />
    </Stack.Navigator>
  );
}

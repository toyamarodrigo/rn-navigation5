import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('about')}
      />
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('contact')}
      />
      <Button
        title="Go to Courses"
        onPress={() => navigation.navigate('contact', { screen: 'courses' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const Courses = ({ navigation }) => {
  return (
    <View>
      <Text>Courses Screen</Text>
      <Button title="About" onPress={() => navigation.navigate('about')} />
    </View>
  );
};

const styles = StyleSheet.create({});

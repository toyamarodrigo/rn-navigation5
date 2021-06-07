import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const Contact = ({ navigation }) => {
  return (
    <View>
      <Text>Contact Screen</Text>
      <Button title="About" onPress={() => navigation.navigate('about')} />
    </View>
  );
};

const styles = StyleSheet.create({});

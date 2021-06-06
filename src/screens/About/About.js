import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const About = ({ navigation }) => {
  return (
    <View>
      <Text>About Screen</Text>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('contact')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

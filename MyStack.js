import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import Courses from './screens/Courses';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="courses" component={Courses} />
    </Stack.Navigator>
  );
};

export default MyStack;

const styles = StyleSheet.create({});

import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Courses = ({route, navigation}) => {
  const itemId = route.params?.itemId;

  return (
    <View>
      <Text>Courses of Sample3 App : {itemId}</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({});

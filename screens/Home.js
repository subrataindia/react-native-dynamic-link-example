import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';

function splitLink(url) {
  const linkArray = url.split('/').reverse();
  const linkArrayLength = linkArray.length;
  if (linkArray[0].length === 0) {
    return [linkArray[2], {itemId: linkArray[1]}];
  }
  return [linkArray[1], {itemId: linkArray[0]}];
}

const Home = ({navigation}) => {
  //console.log('Home Screen', dynamicLinks());
  dynamicLinks().onLink(link => {
    const [page, params] = splitLink(link.url);
    navigation.navigate(page, params);

    // if (link.url === 'https://ttrc.in/courses/15') {
    //   navigation.navigate('Courses', {itemId: 15});
    // }
    // if (link.url === 'https://ttrc.in/courses/20') {
    //   navigation.navigate('Courses', {itemId: 20});
    // }
  });
  dynamicLinks()
    .getInitialLink()
    .then(link => {
      if (link) {
        console.log(' Get Initial Link: ', link);
        const [page, params] = splitLink(link.url);
        navigation.navigate(page, params);
      }
    });

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Courses"
        onPress={() => {
          navigation.navigate('Courses', {itemId: 5});
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

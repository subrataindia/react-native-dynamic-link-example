import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import MyStack from './MyStack';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const App = () => {
  //navigation = useNavigation();
  //dynamicLinks().onLink(link => console.log('Link from APP : ', link));

  // const handleDynamicLink = link => {
  //   // Handle dynamic link inside your own application
  //   console.log('Link: ', link.url);
  //   if (link.url === 'https://ttrc.in/courses/15') {
  //     navigation.navigate('Courses', {itemId: 15});
  //   }
  // };

  // useEffect(() => {
  //   console.log('Use Effect called!', dynamicLinks());
  //   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
  //   // When the component is unmounted, remove the listener
  //   return () => unsubscribe();
  // });

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <MyStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

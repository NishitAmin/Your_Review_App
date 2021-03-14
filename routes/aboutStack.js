import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';
import Header from '../shared/header';
import React from 'react';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header navigation={navigation} />,
      }
    }
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 72 }
  }
});

export default AboutStack;
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetail';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return{
        headerTitle: () => <Header navigation={navigation} />,
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Game Details',
    }
  },
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 72 }
  }
});

export default HomeStack;
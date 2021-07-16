import React from 'react';
import {Button, Text, View} from 'react-native';
import ListTasks from '../components/ListTasks';

import styles from '../styles/GeneralStyle';

import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from './ListScreen';
import DetailsScreen from './DetailsScreen';

const {Navigator, Screen} = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.app}>
      <Navigator initialRouteName="List" screenOptions={{headerShown: false}}>
        <Screen name="List" component={ListScreen} />
        <Screen name="Details" component={DetailsScreen} />
      </Navigator>
    </View>
  );
};

export default HomeScreen;

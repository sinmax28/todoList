import React from 'react';
import {View} from 'react-native';
import styles from '../styles/GeneralStyle';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import ListScreen from './ListScreen';
import DetailsScreen from './DetailsScreen';

const TaskContent = () => {
  return (
    <View style={styles.app}>
      <Navigator initialRouteName="List" screenOptions={{headerShown: false}}>
        <Screen name="List" component={ListScreen} />
        <Screen name="Details" component={DetailsScreen} />
      </Navigator>
    </View>
  );
};

export default TaskContent;

import React from 'react';
import {Button, Text, View} from 'react-native';
import ListTasks from '../components/ListTasks';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, marginTop: '20%', alignItems: 'center'}}>
      <Text>HOME SCREEN</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}></Button>
      <ListTasks></ListTasks>
    </View>
  );
};

export default HomeScreen;

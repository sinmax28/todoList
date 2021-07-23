import React, {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import ListTasks from '../components/ListTasks';

import styles from '../styles/GeneralStyle';

import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from './ListScreen';
import DetailsScreen from './DetailsScreen';
import AddTaskScreen from './AddTaskScreen';
import TaskContent from './TaskContent';

import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootDrawerParamList} from '../types/navigation/RootTypes';
import {Props} from '@fortawesome/react-native-fontawesome';

const {Navigator, Screen} = createStackNavigator();
// const ModalNav = createStackNavigator();

type HomeScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  'Home'
>;

interface Prop {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({navigation}: Prop) => {
  // const [taskList, setTaskList] = useState([]);

  // const handleAdd = inputTask => {
  //   setTaskList([...taskList, inputTask]);
  //   setInputTask('');
  // };
  // const handleRemove = id =>
  //   setTaskList(taskList.filter((_, index) => index != id));
  return (
    <View style={styles.app}>
      <Navigator
        initialRouteName="Tasks"
        mode="modal"
        screenOptions={{headerShown: false}}>
        <Screen
          name="Tasks"
          component={TaskContent}
          //test
          // initialParams={{handleRemove: handleRemove}}
        />
        <Screen
          name="AddTask"
          component={AddTaskScreen}
          // initialParams={{handleAdd: handleAdd}}
        />
      </Navigator>
    </View>
  );
};

export default HomeScreen;

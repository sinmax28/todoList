import React, {useState} from 'react';
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../styles/GeneralStyle';

import ListTasks from '../components/ListTasks';
import Task from '../components/Task';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {asyncCall} from '../stores/task/taskActions';

const ListScreen = ({navigation}) => {
  const taskList = useSelector(state => state.task.tasks);
  console.log('rendering list!!!');
  // const todos = useSelector(state => state.task.todos);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(asyncCall());
  // }, []);

  // return (
  //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     {todos.loading && <Text> LOADING ...</Text>}
  //     {todos.err.length > 0 && <Text>{todos.err}</Text>}
  //     {todos.data.map((item, index) => {
  //       return (
  //         <Text key={index}>
  //           {item.id} {item.completed && 'gata'}
  //         </Text>
  //       );
  //     })}
  //   </View>
  // );

  return (
    <View style={styles.app}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '20%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {!taskList.length ? (
          <Text>Nimic de aratat :'(</Text>
        ) : (
          <FlatList
            contentContainerStyle={{
              alignItems: 'center',
              paddingTop: '5%',
              paddingBottom: '30%',
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={taskList}
            keyExtractor={item => item.id}
            renderItem={item => {
              console.log(item);
              return <Task key={item.item.id} task={item.item} />;
            }}
          />
        )}
      </View>

      <View style={{position: 'absolute', bottom: '5%', alignSelf: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddTask');
          }}>
          <FontAwesomeIcon icon={faPlusCircle} size={64} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListScreen;

import React, {useState} from 'react';
import {Button, View, TextInput, Text} from 'react-native';
import styles from '../styles/GeneralStyle';

import ListTasks from '../components/ListTasks';
import Task from '../components/Task';
const ListScreen = () => {
  const [inputTask, setInputTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    setTaskList([...taskList, inputTask]);
    setInputTask('');
  };

  const handleRemove = id =>
    setTaskList(taskList.filter((_, index) => index != id));

  return (
    <View style={styles.app}>
      {/* <Text>HOME SCREEN</Text> */}
      {/* <ListTasks></ListTasks> */}

      <View style={{marginTop: '30%', alignItems: 'center'}}>
        {!taskList.length ? (
          <Text>Nimic de aratat :'(</Text>
        ) : (
          taskList.map((task, index) => (
            <Task
              key={index}
              handleRemove={handleRemove}
              task={task}
              id={index}
            />
          ))
        )}
      </View>
      <View style={{position: 'absolute', bottom: '10%', alignSelf: 'center'}}>
        <TextInput
          style={styles.inputField}
          placeholder="baga aici tasku'!"
          onChangeText={input => setInputTask(input)}
          onSubmitEditing={handleAdd}
          defaultValue={inputTask}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>
      {/* <Button style={{position: 'absolute'}} title="Add"></Button> */}
    </View>
  );
};

export default ListScreen;

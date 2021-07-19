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

const ListScreen = ({navigation}) => {
  const taskList = [
    'abcdkjsbdkabskjdbajksdbjkas',
    'asdas',
    'dsasdasd',
    'abcdkjsbdkabskjdbajksdbjkas',
    'asdas',
    'dsasdasd',
    'abcdkjsbdkabskjdbajksdbjkas',
    'asdas',
    'dsasdasd',
    'abcdkjsbdkabskjdbajksdbjkas',
    'asdas',
    'dsasdasd',
    'abcdkjsbdkabskjdbajksdbjkas',
    'asdas',
    'dsasdasd',
    'abcdkjsbdkabskjdbajksdbjkas',
    'asdas',
    'dsasdasd',
  ];

  const extractKey = item => item.id.toString();
  return (
    <View style={styles.app}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '20%',
          alignItems: 'center',
          justifyContent: 'center',
          // borderWidth: 1,
        }}>
        {!taskList.length ? (
          <Text>Nimic de aratat :'(</Text>
        ) : (
          // taskList.map((task, index) => (
          //   <Task
          //     key={index}
          //     // handleRemove={handleRemove}
          //     task={task}
          //     id={index}
          //   />
          // ))

          <FlatList
            // style={{alignItems: 'center'}}
            contentContainerStyle={{
              alignItems: 'center',
              paddingTop: '5%',
              paddingBottom: '30%',
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={taskList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item, index) => {
              console.log(item);
              return <Task key={index} task={item.item} id={index} />;
            }}
          />
        )}
      </View>
      {/* <View style={{position: 'absolute', bottom: '10%', alignSelf: 'center'}}>
        <TextInput
          style={styles.inputField}
          placeholder="baga aici tasku'!"
          onChangeText={input => setInputTask(input)}
          onSubmitEditing={handleAdd}
          defaultValue={inputTask}
        />
        <Button title="Add" onPress={handleAdd} />
        <Button
          title="OPEN MODAL"
          onPress={() => {
            navigation.navigate('AddTask', {mode: 'modal'});
          }}
        />
      </View> */}
      {/* <Button style={{position: 'absolute'}} title="Add"></Button> */}
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

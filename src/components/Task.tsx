import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSquare} from '@fortawesome/free-regular-svg-icons';
import {faInfoCircle, faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux';
import {toggleTask} from '../stores/index';
import {TaskType} from '../types/store/task/taskTypes';

interface Props {
  task: TaskType;
}

const Task: React.FC<Props> = ({task}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // console.log('checkicon: .....' + checkIcon.iconName);

  const handleCheck = () => {
    dispatch(toggleTask(task.id));
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text numberOfLines={1} style={styles.task}>
          {task.title}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {id: task.id})}>
          <FontAwesomeIcon icon={faInfoCircle} size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCheck}>
          <FontAwesomeIcon
            icon={task.complete ? faCheckSquare : faSquare}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4,
    borderRadius: 8,
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    // borderColor: 'black',
    marginBottom: '5%',
    alignItems: 'center',
    // display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // flex: 1,
    // borderWidth: 1,
  },

  actionContainer: {
    marginLeft: '8%',
    // paddingLeft: '2%',
    marginRight: 0,
    // borderWidth: 1,
    // flexShrink: 1,
    // flexGrow: 1,
    // width: '30%',
    justifyContent: 'space-between',
    // alignItems: 'stretch',
    // flex: 1,
    flexBasis: '20%',
    // display: 'flex',
    flexDirection: 'row',
    // position: 'absolute',
    // right: 10,
    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end',
  },

  task: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 18,
  },

  taskContainer: {
    // flex: 2,
    // borderWidth: 1,
    // marginLeft: '10%',
    // marginRight: '10%',
    // flexShrink: 2,
    // flexGrow: 2,
    flexBasis: '40%',
    // width: '70%',
  },
});

export default Task;

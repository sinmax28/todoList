import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Task = ({handleRemove, task, id}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text numberOfLines={1} style={styles.task}>
          {task}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Button
          title="details"
          onPress={() => navigation.navigate('Details', {item: task})}></Button>
        <Button title="X" onPress={() => handleRemove(id)}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    borderColor: 'black',
    marginBottom: '5%',
    alignItems: 'center',
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  actionContainer: {
    marginLeft: 10,
    marginRight: 10,
    // borderWidth: 1,
    flexShrink: 1,
    flexGrow: 1,
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // position: 'absolute',
    // right: 10,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },

  task: {
    justifyContent: 'center',
  },

  taskContainer: {
    // flex: 1,
    // borderWidth: 1,
    marginLeft: '10%',
    marginRight: '10%',
    flexShrink: 2,
    flexGrow: 2,
  },
});

export default Task;

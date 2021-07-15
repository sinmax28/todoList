import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
const Task = ({handleRemove, task, id}) => {
  return (
    <View style={styles.container}>
      <Text>{task}</Text>
      <Button title="X" onPress={() => handleRemove(id)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'blueviolet',
    marginTop: '5%',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default Task;

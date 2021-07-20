import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addTask, deleteTask} from '../redux';
import {Button as ButtonDeAlaFain} from 'react-native-elements';
const AddTaskScreen = ({navigation}) => {
  const tasks = useSelector(state => state.task.tasks);
  console.log(tasks);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title.length == 0 || description.length == 0) return;

    let task = {
      id: tasks.length,
      title: title,
      description: description,
    };

    dispatch(addTask(task));
    setTitle('');
    setDescription('');
    navigation.goBack();
    console.log(task);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Task...</Text>
        </View>
        <TextInput
          style={styles.inputField}
          placeholder="Title"
          placeholderT
          onChangeText={input => setTitle(input)}
          // onSubmitEditing={handleAdd}
          value={title}
        />
        <TextInput
          multiline={true}
          numberOfLines={10}
          style={styles.inputField}
          placeholder="Description"
          onChangeText={input => setDescription(input)}
          // onSubmitEditing={handleAdd}
          value={description}
        />
        <View style={styles.actionContainer}>
          {/* <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-around',
              borderWidth: 1,
            }}> */}
          <ButtonDeAlaFain
            buttonStyle={styles.actionButton}
            titleStyle={{color: 'black'}}
            type="outline"
            title="Cancel"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <ButtonDeAlaFain
            buttonStyle={[styles.actionButton, {backgroundColor: 'black'}]}
            title="Submit"
            // style={{backgroundColor: 'blue', borderWidth: 1}}
            onPress={handleSubmit}
          />
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fafafa',
    borderRadius: 8,
    // borderWidth: 1,
  },

  actionContainer: {
    // borderWidth: 1,
    width: '100%',
    marginTop: '10%',
    // flexDirection: 'row',
    // alignContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  actionButton: {
    width: 140,
    // flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },

  wrapper: {
    width: '85%',
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '5%',
    justifyContent: 'flex-start',
    // borderWidth: 1,
  },

  title: {
    fontFamily: 'Helvetica',
    fontSize: 40,
  },

  inputField: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4,
    borderRadius: 8,
    width: '100%',
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
  },
});

export default AddTaskScreen;

import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
const AddTaskScreen = ({navigation}) => {
  const [inputTask, setInputTask] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        style={styles.inputField}
        placeholder="baga aici tasku'!"
        // onChangeText={input => setInputTask(input)}
        // onSubmitEditing={handleAdd}
        defaultValue={inputTask}
      />
      <Button
        title="Add"
        //   onPress={handleAdd}
      />
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default AddTaskScreen;

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Platform,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Task from './Task';

const App = () => {
  const [inputTask, setInputTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const handleAdd = () => {
    setTaskList([...taskList, inputTask]);
    setInputTask('');
  };

  const handleRemove = id =>
    setTaskList(taskList.filter((_, index) => index != id));

  return (
    <View style={styles.app}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="baga aici tasku'!"
          onChangeText={input => setInputTask(input)}
          onSubmitEditing={handleAdd}
          defaultValue={inputTask}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>

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
  );
};

const styles = StyleSheet.create({
  app: {
    // backgroundColor: 'white',
    marginTop: '20%',
    // borderWidth: 1,
    // borderColor: '#000000',
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center'
    // alignItems: 'baseline'
    // innerWidth: 30rem,
    ...Platform.select({
      ios: {
        backgroundColor: 'powderblue',
      },
      android: {
        backgroundColor: 'steelblue',
      },
    }),
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  inputField: {
    flex: 1,
    width: '80%',
    height: 40,
    borderWidth: 1,
  },

  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;

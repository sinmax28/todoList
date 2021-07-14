import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [inputTask, setInputTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const handleSubmit = () => {
    
  }

  return (
        <View
          style={styles.app}
        >
          <TextInput
            style={styles.inputContainer}
            placeholder="baga aici tasku'!"
            onChangeText={input => setInputTask(input)}
            onSubmitEditing={() => {
              setTaskList([...taskList, inputTask]); 
              setInputTask('');
            }}
            defaultValue={inputTask}
          />
          {!taskList.length ? <Text>Nimic de aratat :'(</Text> : 
            taskList.map((task, index) => <Text key={index}>{task}</Text>)
          }
         
        </View>
  );
};

const styles = StyleSheet.create({
  app: {
    // backgroundColor: 'white',
    marginTop: 'auto',
    // borderWidth: 1,
    // borderColor: '#000000',
    // flex: 1,
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center'
    // alignItems: 'baseline'
    // innerWidth: 30rem,
    ...Platform.select({
      ios: {
        backgroundColor: 'powderblue'
      },
      android: {
        backgroundColor: 'steelblue'
      }
    })
  },

  inputContainer :{
    width: '80%',
    height: 40,
    borderWidth: 1
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import 'react-native-gesture-handler';
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

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const {Navigator, Screen} = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          name="Home"
          component={HomeScreen}
          // options={{
          //   headerRight: () => (
          //     <Button
          //       onPress={() => alert('This is a button!')}
          //       title="Info"
          //       color="#fff"
          //     />
          //   ),
          // }}
        />
        <Screen name="About" component={AboutScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;

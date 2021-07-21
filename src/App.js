import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
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
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const {Navigator, Screen} = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigator
            initialRouteName="Home"
            drawerStyle={{width: '50%'}}
            // drawerContent={props => {
            //   return (
            //     <DrawerItem
            //       label="Home"
            //       icon={() => <FontAwesomeIcon icon={faHome} />}
            //     />
            //   );
            // }}>
          >
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
      </PersistGate>
    </Provider>
  );
};

export default App;

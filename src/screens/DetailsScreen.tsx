import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTask} from '../stores';
// import styles from '../styles/GeneralStyle';

const DetailsScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {id} = route.params;

  const task = useSelector(state =>
    state.task.tasks.find(item => item.id === id),
  );

  if (!task) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{task.title}</Text>
        </View>
        <View style={styles.border}></View>
        <View style={styles.descContainer}>
          <Text style={styles.description}>{task.description}</Text>
        </View>

        <View style={styles.actionContainer}>
          <Button
            title="Delete"
            type="outline"
            containerStyle={styles.button}
            titleStyle={{color: 'black'}}
            buttonStyle={{
              borderColor: 'black',
              borderWidth: 1,
            }}
            onPress={() => {
              dispatch(deleteTask(task.id));
              navigation.goBack();
            }}
          />
          <Button
            title="Back"
            containerStyle={styles.button}
            buttonStyle={{
              backgroundColor: 'black',
              borderColor: 'black',
              borderWidth: 1,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  actionContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    width: '45%',
  },

  title: {
    fontFamily: 'Helvetica',
    fontSize: 32,
  },

  border: {
    borderWidth: 2.5,
    borderRadius: 10,
    marginBottom: '5%',
    marginTop: '1%',
    width: '100%',
    backgroundColor: 'black',
  },

  description: {
    fontFamily: 'Helvetica',
    fontSize: 16,
  },

  descContainer: {
    paddingBottom: '18%',
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  wrapper: {
    // borderWidth: 1,
    width: '85%',
    padding: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 4,
    borderRadius: 8,
    backgroundColor: 'white',
    // borderColor: 'black',
  },
});

export default DetailsScreen;

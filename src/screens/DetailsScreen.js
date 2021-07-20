import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
// import styles from '../styles/GeneralStyle';

const DetailsScreen = ({navigation, route}) => {
  const {id} = route.params;

  const task = useSelector(
    state => state.task.tasks.filter(item => item.id === id)[0],
  );
  console.log(task);
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
            title="Back"
            buttonStyle={{
              width: 140,
              backgroundColor: 'black',
              borderColor: 'black',
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
    alignItems: 'center',
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
    // borderWidth: 1,
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // borderBottomColor: 'grey',
    // borderBottomWidth: 7,
    // borderBottomStartRadius: 5,
    // borderBottomEndRadius: 5,
    // paddingBottom: '2%',
    // marginBottom: '5%',
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

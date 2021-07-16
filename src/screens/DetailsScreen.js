import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../styles/GeneralStyle';
const DetailsScreen = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.app}>
      <Text style={{marginTop: '30%'}}>{item}</Text>
      <Button
        title="back"
        style={{marginTop: '30%'}}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default DetailsScreen;

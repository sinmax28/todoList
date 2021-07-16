import React from 'react';
import {Text, View} from 'react-native';
const AboutScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{`Made by Rebel. with ❤️`}</Text>
    </View>
  );
};

export default AboutScreen;

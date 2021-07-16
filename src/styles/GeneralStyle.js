import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  app: {
    flex: 1,
    // display: 'flex',
    // borderColor: 'black',
    // borderWidth: 5,
    // alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: '#e8e8e8',
      },
      android: {
        backgroundColor: 'steelblue',
      },
    }),
  },
});

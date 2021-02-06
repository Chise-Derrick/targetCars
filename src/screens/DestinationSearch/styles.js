import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 5,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  listView: {
    position: 'absolute',
    top: 99,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 5,
    left: 10,
    right: 10,
  },
  separator: {
    backgroundColor: '#dedede',
    height: 1,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
    width: 30,
  },
  locationText: {},
  line: {
    width: 1,
    height: 46,
    backgroundColor: '#ccc',
    position: 'absolute',
    top: 30,
    left: 14,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: '#333',
    position: 'absolute',
    top: 77,
    left: 12,
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 12,
    backgroundColor: '#333',
    position: 'absolute',
    top: 24,
    left: 12,
  },
});

export default styles;

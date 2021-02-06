import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e7e7e7',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#535353',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    borderRadius: 50,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    color: '#434343',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#b3b3b3',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },

  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;

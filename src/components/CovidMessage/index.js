import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function CovidMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        We’re actively monitoring the COVID-19 situation and are continually
        working to help keep those who rely on our platform healthy and safe.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
}

export default CovidMessage;

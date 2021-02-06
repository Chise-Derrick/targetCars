import React from 'react';
import styles from './styles';

import {Text, View, Pressable} from 'react-native';
import TargetTypeRow from '../TargetTypeRow';
import typesData from '../../assets/data/types';

const TargetTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map((type) => (
        <TargetTypeRow
          type={type}
          key={type.id}
          //      imaged={require('../../assets/images/' + type.type + '.jpeg')}
        />
      ))}

      <Pressable onPress={confirm} style={styles.button}>
        <Text style={styles.buttonText}>Confirm Target</Text>
      </Pressable>
    </View>
  );
};

export default TargetTypes;

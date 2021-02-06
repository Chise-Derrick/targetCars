import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: Dimensions.get('window').height - 400,
        }}>
        <HomeMap />
      </View>
      <CovidMessage />
      <Text>notJust a component</Text>
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;

import React from 'react';

import {Text, View, Dimensions} from 'react-native';
import RouteMap from '../../components/RouteMap';
import TargetTypes from '../../components/TargetTypes';

import {useRoute} from '@react-navigation/native';

const SearchResults = () => {
  const route = useRoute();
  const {originPlace, destinationPlace} = route.params;
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          height: Dimensions.get('window').height - 410,
        }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View
        style={{
          height: 400,
        }}>
        <TargetTypes />
      </View>
    </View>
  );
};

export default SearchResults;

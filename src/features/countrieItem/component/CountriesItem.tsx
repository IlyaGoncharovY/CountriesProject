import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {ItemCountries} from './item/ItemCountries';
import {countriesAPI} from '../../../api/CountriesService';
import {CountriesTypeChild} from '../../../common/interfaces/Interfaces';

type StackParamList = {
  CountriesItem: {countriesName: string};
};

export const CountriesItem = () => {
  const route = useRoute<RouteProp<StackParamList, 'CountriesItem'>>();

  const countriesName = route.params?.countriesName;

  const {
    data: currentCountries,
    error,
    isLoading,
  } = countriesAPI.useGetCurrentCountriesQuery(countriesName);
  console.log(countriesName);
  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View>
        <Text>...Loading</Text>
      </View>
    );
  }

  if (!currentCountries) {
    return (
      <View>
        <Text>Data not available</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={currentCountries}
        renderItem={({item}) => <ItemCountries countriesItem={item} />}
        keyExtractor={(item: CountriesTypeChild) => item.ccn3 + 1}
      />
    </View>
  );
};

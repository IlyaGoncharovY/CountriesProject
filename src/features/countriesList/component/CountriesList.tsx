import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {countriesAPI} from '../reducer/CountriesService';
import {CountriesItem} from '../../countrieItem/component/CountriesItem';
import {CountriesTypeChild} from '../../../common/interfaces/Interfaces';

export const CountriesList = () => {
  const {
    data: countries,
    error,
    isLoading,
  } = countriesAPI.useGetAllCountriesQuery("");
  return (
    <>
      <Text>CountriesList</Text>
      {isLoading && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {error && (
        <View>
          <Text>Error</Text>
        </View>
      )}
      <FlatList
        data={countries && countries}
        renderItem={({item}) => <CountriesItem countries={item} />}
        keyExtractor={(item: CountriesTypeChild) => item.ccn3 + 1}
      />
    </>
  );
};

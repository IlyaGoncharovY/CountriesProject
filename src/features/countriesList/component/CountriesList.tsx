import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';

import {countriesAPI} from '../../../api/CountriesService';
import {CountriesListItem} from './Item/CountriesListItem';
import {CountriesTypeChild} from '../../../common/interfaces/Interfaces';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const CountriesList = () => {
  const {
    data: countries,
    error,
    isLoading,
  } = countriesAPI.useGetAllCountriesQuery('');

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleCountryClick = (countriesName: string) => {
    navigation.navigate('CountriesItem', {countriesName});
  };
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
        renderItem={({item}) => (
          <CountriesListItem
            countries={item}
            onPress={() => handleCountryClick(item.name.common)}
          />
        )}
        keyExtractor={(item: CountriesTypeChild) => item.ccn3 + 1}
      />
    </>
  );
};

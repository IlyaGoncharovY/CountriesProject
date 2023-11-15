import React from 'react';
import {Text, View} from 'react-native';
import {countriesAPI} from '../../../api/CountriesService';
import {RouteProp, useRoute} from '@react-navigation/native';

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
      <Text>{currentCountries.name && currentCountries.name.common}</Text>
    </View>
  );
};

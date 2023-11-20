import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';

import {useAppSelector} from '../../../store/hook';
import {countriesAPI} from '../../../api/CountriesService';
import {CountriesListItem} from './Item/CountriesListItem';
import {CountriesTypeChild} from '../../../common/interfaces/Interfaces';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SearchMainComponent} from '../../search/components/SearchMainComponent';
import {TranslateCountry} from '../../translateCountry/components/TranslateCountry';

export const CountriesList = () => {
  const {
    data: countries,
    error,
    isLoading,
  } = countriesAPI.useGetAllCountriesQuery('');

  const {isOpenAllCountries, isEditMode} = useAppSelector(
    state => state.search,
  );

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleCountryClick = (countriesName: string) => {
    navigation.navigate('CountriesItem', {countriesName});
  };

  return (
    <>
      <SearchMainComponent />
      <TranslateCountry />
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
      {isOpenAllCountries && (
        <FlatList
          data={countries}
          renderItem={({item, index}) => (
            <CountriesListItem
              countries={item}
              index={index}
              isEditMode={isEditMode}
              onPress={() => handleCountryClick(item.name.common)}
            />
          )}
          keyExtractor={(item: CountriesTypeChild) => item.ccn3 + 1}
        />
      )}
    </>
  );
};

import React from 'react';
import {FlatList, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useAppSelector} from '../../../store/hook';
import {countriesAPI} from '../../../api/CountriesService';
import {TranslateCountryItem} from './item/TranslateCountryItem';
import {CountriesTypeChild} from '../../../common/interfaces/Interfaces';

export const TranslateCountry = () => {
  const {textCountry, isEditMode} = useAppSelector(state => state.search);

  const {
    data: translateCountries,
    error,
    isLoading,
  } = countriesAPI.useGetTranslateCountryQuery(textCountry);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleCountryClick = (countriesName: string) => {
    navigation.navigate('CountriesItem', {countriesName});
  };

  return (
    <View>
      {isEditMode && (
        <FlatList
          data={translateCountries}
          renderItem={({item}) => (
            <TranslateCountryItem
              country={item}
              onPress={() => handleCountryClick(item.name.common)}
              isLoading={isLoading}
              error={error}
            />
          )}
          keyExtractor={(item: CountriesTypeChild) => item.ccn3 + 1}
        />
      )}
    </View>
  );
};

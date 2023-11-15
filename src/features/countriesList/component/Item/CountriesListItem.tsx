import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CountriesTypeChild} from '../../../../common/interfaces/Interfaces';

interface ICountriesItem {
  countries: CountriesTypeChild;
  onPress: () => void;
}
export const CountriesListItem: FC<ICountriesItem> = ({countries, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{countries.name.common}</Text>
        <Text>{countries.capital}</Text>
        <Text>{countries.flag}</Text>
      </View>
    </TouchableOpacity>
  );
};

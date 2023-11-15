import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {CountriesTypeChild} from '../../../common/interfaces/Interfaces';

interface ICountriesItem {
  countries: CountriesTypeChild;
}
export const CountriesItem: FC<ICountriesItem> = ({countries}) => {
  return (
    <View>
      <Text>{countries.capital}</Text>
      <Text>{countries.flag}</Text>
    </View>
  );
};

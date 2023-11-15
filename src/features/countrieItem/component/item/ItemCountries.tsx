import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {CountriesTypeChild} from '../../../../common/interfaces/Interfaces';

interface IItemCountries {
  countriesItem: CountriesTypeChild;
}

export const ItemCountries: FC<IItemCountries> = ({countriesItem}) => {
  return (
    <View>
      <Text>{countriesItem.capital} </Text>
      <Text>{countriesItem.area} </Text>
    </View>
  );
};

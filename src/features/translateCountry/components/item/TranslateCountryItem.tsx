import React, {FC} from 'react';
import {SerializedError} from '@reduxjs/toolkit';
import {Text, TouchableOpacity, View} from 'react-native';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

import {CountriesTypeChild} from '../../../../common/interfaces/Interfaces';

interface ITranslateCountryItem {
  country: CountriesTypeChild;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  onPress: () => void;
}

export const TranslateCountryItem: FC<ITranslateCountryItem> = ({
  country,
  isLoading,
  error,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
      <Text>TranslateCountryItem</Text>
      <Text>{country.name.official}</Text>
    </TouchableOpacity>
  );
};

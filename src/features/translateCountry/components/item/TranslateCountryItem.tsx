import React, {FC} from 'react';
import {SerializedError} from '@reduxjs/toolkit';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

import {TextInfo} from '../../../../common/components/TextInfo';
import {CountriesTypeChild} from '../../../../common/interfaces/Interfaces';

interface ITranslateCountryItem {
  country: CountriesTypeChild;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  onPress: () => void;
  index: number;
}

export const TranslateCountryItem: FC<ITranslateCountryItem> = ({
  country,
  isLoading,
  error,
  onPress,
  index,
}) => {
  const backgroundColor = index % 2 === 0 ? '#abd1c6' : '#84efed';
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor}]}>
      {isLoading && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {error && (
        <View>
          <Text>Error: {error.toString()}</Text>
        </View>
      )}
      <View style={styles.viewInfo}>
        <TextInfo label={'Country'} value={country.name.official} />
        <TextInfo label={'Capital'} value={country.capital} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  viewInfo: {
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: 'kanit_semi_bold',
  },
});

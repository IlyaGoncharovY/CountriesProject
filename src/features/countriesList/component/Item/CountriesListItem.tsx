import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {TextInfo} from '../../../../common/components/TextInfo';
import {CountriesTypeChild} from '../../../../common/interfaces/Interfaces';

interface ICountriesItem {
  countries: CountriesTypeChild;
  onPress: () => void;
  index: number;
  isEditMode: boolean;
}
export const CountriesListItem: FC<ICountriesItem> = ({
  countries,
  onPress,
  index,
  isEditMode,
}) => {
  const backgroundColor = index % 2 === 0 ? '#abd1c6' : '#84efed';

  return (
    <>
      {!isEditMode && (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.container, {backgroundColor}]}>
          <View style={styles.viewInfo}>
            <TextInfo label={'Country'} value={countries.name.common} />
            <TextInfo label={'Capital'} value={countries.capital} />
            <TextInfo label={'Flag'} value={countries.flag} />
          </View>
        </TouchableOpacity>
      )}
    </>
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
});

import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
            <Text style={styles.textStyle}>
              Country: {countries.name.common}
            </Text>
            <Text style={styles.textStyle}>Capital: {countries.capital}</Text>
            <Text style={styles.textStyle}>Flag: {countries.flag}</Text>
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
  textStyle: {
    // fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'kanit_semi_bold',
  },
});

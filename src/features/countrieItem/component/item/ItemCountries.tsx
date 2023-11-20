import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {CountriesTypeChild} from '../../../../common/interfaces/Interfaces';
import {TextInfo} from '../../../../common/components/TextInfo';

interface IItemCountries {
  countriesItem: CountriesTypeChild;
}

export const ItemCountries: FC<IItemCountries> = ({countriesItem}) => {
  return (
    <View style={styles.flagsContainer}>
      <View style={styles.InformationContainer}>
        <TextInfo label={'Official name'} value={countriesItem.name.official} />
        <TextInfo label={'Common name'} value={countriesItem.name.common} />
        <TextInfo label={'Capitals'} value={countriesItem.capital} />
        <TextInfo label={'Area'} value={countriesItem.area} />
        <TextInfo
          label={'CapitalInfo'}
          value={countriesItem.capitalInfo.latlng}
        />
        <TextInfo label={'Status'} value={countriesItem.status} />
        <TextInfo label={'Population'} value={countriesItem.population} />
      </View>
      <Image
        source={{
          uri: countriesItem.flags.png,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '40%',
    height: 150,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 5,
  },
  flagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  InformationContainer: {
    flex: 1,
    marginLeft: 10,
  },
});

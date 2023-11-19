import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../../store/hook';
import {
  setEditMode,
  setOpenAllCountries,
  setTextCountry,
} from '../reducer/searchSlice';

export const SearchMainComponent = () => {
  const {isOpenAllCountries} = useAppSelector(state => state.search);

  const [title, setTitle] = useState<string>('');

  const dispatch = useAppDispatch();

  const inputOnChangeHandler = (text: string) => {
    setTitle(text);
  };

  const openAllCountriesHandler = () => {
    dispatch(setOpenAllCountries(!isOpenAllCountries));
    dispatch(setEditMode(false));
  };

  const setNameCountryHandler = () => {
    if (title.length >= 1) {
      dispatch(setTextCountry(title));
      dispatch(setEditMode(true));
      setTitle('');
    }
  };

  return (
    <View>
      <TextInput value={title} onChangeText={inputOnChangeHandler} />
      <TouchableOpacity onPress={openAllCountriesHandler}>
        <Text>all</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setNameCountryHandler}>
        <Text>search to country name</Text>
      </TouchableOpacity>
    </View>
  );
};

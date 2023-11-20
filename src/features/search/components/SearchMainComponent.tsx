import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={inputOnChangeHandler}
        style={styles.input}
      />
      <TouchableOpacity onPress={openAllCountriesHandler} style={styles.button}>
        <Text style={styles.buttonText}>all countries</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={setNameCountryHandler}
        style={title.length <= 0 ? styles.buttonDisabled : styles.button}
        disabled={title.length <= 0}>
        <Text style={styles.buttonText}>search to country name</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonDisabled: {
    backgroundColor: '#838b8d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#4d4545',
    fontWeight: 'bold',
  },
});

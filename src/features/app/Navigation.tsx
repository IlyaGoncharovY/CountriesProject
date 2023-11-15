import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CountriesList} from '../countriesList/component/CountriesList';
import {CountriesItem} from '../countrieItem/component/CountriesItem';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={'CountriesList'}
          component={CountriesList}
          options={{
            title: 'CountriesList',
            headerStyle: {backgroundColor: '#e78fb3'},
          }}
        />
        <Stack.Screen
          name={'CountriesItem'}
          component={CountriesItem}
          options={{
            title: 'CountriesItem',
            headerStyle: {backgroundColor: '#e78fb3'},
          }}
        />
      </Stack.Navigator>
    </>
  );
};

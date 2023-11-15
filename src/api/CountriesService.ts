import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {
  CountriesType,
  CountriesTypeChild,
} from '../common/interfaces/Interfaces';

export const countriesAPI = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1/'}),
  endpoints: builder => ({
    getAllCountries: builder.query<CountriesType, string>({
      query: () => ({
        url: 'all/',
      }),
    }),
    getCurrentCountries: builder.query<CountriesTypeChild, string>({
      query: (countriesName: string) => ({
        url: `name/${countriesName}`,
      }),
    }),
  }),
});

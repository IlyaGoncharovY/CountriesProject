import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface initialStateType {
  isOpenAllCountries: boolean;
  isEditMode: boolean;
  textCountry: string;
}

const initialState: initialStateType = {
  isOpenAllCountries: false,
  isEditMode: false,
  textCountry: '',
};

const searchSlice = createSlice({
  name: 'SEARCH/searchSlice',
  initialState,
  reducers: {
    setOpenAllCountries: (state, action: PayloadAction<boolean>) => {
      state.isOpenAllCountries = action.payload;
    },
    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.isEditMode = action.payload;
    },
    setTextCountry: (state, action: PayloadAction<string>) => {
      state.textCountry = action.payload;
    },
  },
});
export const {setOpenAllCountries, setEditMode, setTextCountry} =
  searchSlice.actions;

export default searchSlice.reducer;

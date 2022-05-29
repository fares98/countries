import { createSlice } from "@reduxjs/toolkit";
import { countriesApi } from "./api";
const initialState = {};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    onCreateCountry: (state, action) => {
      state.countries = [...state.countries, action.payload];
    },
    onEditCountry: (state, action) => {
      const { index, currentPage } = action.payload;
      const countryIndex = (currentPage - 1) * 10 + index;
      state.countries[countryIndex] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      countriesApi.endpoints.getAllCountries.matchFulfilled,
      (state, { payload }) => {
        state.countries = payload;
      }
    );
  },
});

export const { onCreateCountry, onEditCountry } = countriesSlice.actions;

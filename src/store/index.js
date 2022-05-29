import { configureStore } from "@reduxjs/toolkit";
import {countriesApi, middleware, countriesSlice } from "store/countries";
import {formModalSlice} from "store/formModal";

/**
 * A store holds the whole state tree of your application
 */

export const store = configureStore({
  /**
   * An Object contains all app reducers
   */
  reducer: {
    countriesApiData: countriesApi.reducer,
    countries: countriesSlice.reducer,
    formModal: formModalSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

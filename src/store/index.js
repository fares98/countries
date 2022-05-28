import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "store/countries";

/**
 * A store holds the whole state tree of your application
 */

export const store = configureStore({
  /**
   * An Object contains all app reducers
   */
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

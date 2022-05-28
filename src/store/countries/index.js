import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countries",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v2/" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => ({
        url: "all",
      }),
    }),
  }),
});

export const { useGetAllCountriesQuery } = countriesApi;

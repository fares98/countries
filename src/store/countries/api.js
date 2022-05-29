import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApiData",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v2/" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => ({
        url: "all?fields=name,capital,flag,region,population,latlng",
      }),
    }),
  }),
});

export const { useGetAllCountriesQuery, middleware } = countriesApi;

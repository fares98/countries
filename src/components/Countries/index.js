import { useGetAllCountriesQuery } from "store/countries";

const Countries = () => {
  const { data: countries, isLoading } = useGetAllCountriesQuery();

  if (isLoading) return <div>...Loading</div>;
  if (!countries?.length) return <div>No countries :(</div>;

  return <div>Countries Loaded</div>;
};

export default Countries;

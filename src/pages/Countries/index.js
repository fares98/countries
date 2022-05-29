import { useSelector } from "react-redux";
import { useGetAllCountriesQuery } from "store/countries/api";
import { countriesSelector } from "store/countries/selectors";
import { Table, FormModal, HeroBanner, Spinner } from "components";

const Countries = () => {
  const { isLoading } = useGetAllCountriesQuery();
  const countries = useSelector(countriesSelector);

  if (isLoading) return <Spinner />;
  if (!countries?.length) return <div>No countries</div>;

  return (
    <>
      <HeroBanner />
      <FormModal />
      <Table data={countries} />
    </>
  );
};

export default Countries;

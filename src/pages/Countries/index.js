/** @module Countries Page */

import { useSelector } from "react-redux";
import { useGetAllCountriesQuery } from "store/countries/api";
import { countriesSelector } from "store/countries/selectors";
import { Table, FormModal, HeroBanner, Spinner } from "components";

/**
 * The Root for Countries page that contains (HeroBanner component, Table of countries component, FormModal component for edit/create country)
 */

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

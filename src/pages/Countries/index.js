import { useDispatch, useSelector } from "react-redux";
import { useGetAllCountriesQuery } from "store/countries/api";
import { countriesSelector } from "store/countries/selectors";
import { openCreateModal } from "store/formModal/slice";
import { Table, FormModal } from "components";

const Countries = () => {
  const dispatch = useDispatch();
  const { isLoading } = useGetAllCountriesQuery();
  const countries = useSelector(countriesSelector);

  if (isLoading) return <div>...Loading</div>;
  if (!countries?.length) return <div>No countries</div>;

  const onCreate = () => dispatch(openCreateModal());

  return (
    <div style={{ margin: "50px 100px 0" }}>
      <button onClick={onCreate}>create</button>
      <FormModal />
      <Table data={countries} />
    </div>
  );
};

export default Countries;

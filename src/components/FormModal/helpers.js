import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCreateCountry, onEditCountry } from "store/countries";
import {
  isOpenModalSelector,
  editableCountryDataSelector,
  actionTypeSelector,
  emptyDataSchemaSelector,
  closeModal,
} from "store/formModal";

const inputsData = [
  {
    label: "Country Flag Url",
    name: "flag",
    rules: [
      {
        required: true,
        message: "Please input a country flag url",
      },
    ],
  },
  {
    label: "Country Name",
    name: "name",
    rules: [
      {
        required: true,
        message: "Please input a country name",
      },
    ],
  },
  {
    label: "Country Capital",
    name: "capital",
    rules: [
      {
        required: true,
        message: "Please input a country capital",
      },
    ],
  },
  {
    label: "Country Region",
    name: "region",
    rules: [
      {
        required: true,
        message: "Please input a country region",
      },
    ],
  },
  {
    label: "Country Population",
    name: "population",
    type: 'number',
    rules: [
      {
        required: true,
        message: "Please input a country population",
      },
    ],
  },
  {
    label: "Country Position",
    name: "latlng",
    rules: [
      {
        required: true,
        message: "Please input a country Position (latlng)",
      },
    ],
  },
];

export const useFormModalHandlers = ({ AntdForm }) => {
  const dispatch = useDispatch();
  const [formRef] = AntdForm.useForm();
  const actionType = useSelector(actionTypeSelector);
  const isOpenModal = useSelector(isOpenModalSelector);
  const emptyDataSchema = useSelector(emptyDataSchemaSelector);
  const editableCountryData = useSelector(editableCountryDataSelector);

  const { setFieldsValue } = formRef;
  const isEditModal = actionType === "edit";
  const newFieldsValue = isEditModal ? editableCountryData : emptyDataSchema;

  const modalTitle = isEditModal
    ? `Edit "${editableCountryData.name}" Country`
    : "Create a country";

  const onCancel = () => dispatch(closeModal());

  const onSubmit = (values) => {
    if (isEditModal) {
      dispatch(onEditCountry({ ...newFieldsValue, ...values }));
    } else {
      dispatch(onCreateCountry(values));
    }

    onCancel();
  };

  useEffect(
    () => setFieldsValue(newFieldsValue),
    [isOpenModal, newFieldsValue, setFieldsValue]
  );

  return {
    formRef,
    isOpenModal,
    newFieldsValue,
    modalTitle,
    onSubmit,
    onCancel,
    inputsData,
  };
};

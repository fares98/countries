/**
 * @module FormModal Selectors
 */

/** To get the data that user needs to edit to show it in the edit form */
export const editableCountryDataSelector = ({ formModal }) =>
  formModal?.editableCountryData;

/** To check if the FormModal is open or not */
export const isOpenModalSelector = ({ formModal }) => formModal?.isOpen;

/** To check the action needed for the modal (edit country or create country) */
export const actionTypeSelector = ({ formModal }) => formModal?.actionType;

/** To get an example about the data names to reset form when needed */
export const emptyDataSchemaSelector = ({ formModal }) =>
  formModal?.emptyDataSchema;

import { createSlice } from "@reduxjs/toolkit";
/**
 * @module FormModal Slice
 */

/**
 *  An example about the data names to reset form when needed
 * @type {{}}
*/
const emptyDataSchema = {
  flag: "",
  name: "",
  capital: "",
  region: "",
  population: "",
  latlng: "",
};


const initialState = { isOpen: false, emptyDataSchema };

export const formModalSlice = createSlice({
  name: "formModal",
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.editableCountryData = action.payload;
      state.isOpen = true;
      state.actionType = "edit";
    },
    openCreateModal: (state, action) => {
      state.editableCountryData = action.payload;
      state.isOpen = true;
      state.actionType = "create";
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openEditModal, openCreateModal, closeModal } =
  formModalSlice.actions;

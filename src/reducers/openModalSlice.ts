import { createSlice } from "@reduxjs/toolkit";

interface OpenModalInitialState {
	openEditModal: boolean;
	openNewRecipeModal: boolean;
}

const initialState: OpenModalInitialState = {
	openEditModal: false,
	openNewRecipeModal: false,
};

export const openModalSlice = createSlice({
	name: "openModal",
	initialState,
	reducers: {
		setOpenEditModal: (state) => {
			state.openEditModal = !state.openEditModal;
		},
		setOpenNewRecipeModal: (state) => {
			state.openNewRecipeModal = !state.openNewRecipeModal;
		},
	},
});

export const { setOpenEditModal, setOpenNewRecipeModal } =
	openModalSlice.actions;
export default openModalSlice.reducer;

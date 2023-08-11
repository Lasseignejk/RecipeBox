import { createSlice } from "@reduxjs/toolkit";

interface ToggleInitialState {
	toggleFetchRecipes: boolean;
}

const initialState: ToggleInitialState = {
	toggleFetchRecipes: false,
};

export const toggleSlice = createSlice({
	name: "toggle",
	initialState,
	reducers: {
		setToggleFetchRecipes: (state) => {
			state.toggleFetchRecipes = !state.toggleFetchRecipes;
		},
	},
});

export const { setToggleFetchRecipes } = toggleSlice.actions;
export default toggleSlice.reducer;

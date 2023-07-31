import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SelectedInitialState {
	nav: string;
	recipe: string;
}

const initialState: SelectedInitialState = {
	nav: "Plan",
	recipe: "",
};

export const selectedSlice = createSlice({
	name: "selected",
	initialState,
	reducers: {
		setSelectedNav: (state, action: PayloadAction<string>) => {
			state.nav = action.payload;
		},
		setSelectedRecipe: (state, action: PayloadAction<string>) => {
			state.recipe = action.payload;
		},
	},
});

export const { setSelectedNav, setSelectedRecipe } = selectedSlice.actions;
export default selectedSlice.reducer;

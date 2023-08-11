import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface showRecipe {
	[recipeName: string]: boolean;
}

interface ShowMoreInitialState {
	showRecipe: showRecipe;
}

const initialState: ShowMoreInitialState = {
	showRecipe: {
		"": false,
	},
};

export const showRecipeDetailsSlice = createSlice({
	name: "showMore",
	initialState,
	reducers: {
		setAllRecipes: (state, action: PayloadAction<showRecipe>) => {
			state.showRecipe = action.payload;
		},
		showRecipeTrue: (state, action) => {
			state.showRecipe = { ...state.showRecipe, [action.payload]: true };
		},
		showRecipeFalse: (state, action) => {
			state.showRecipe = { ...state.showRecipe, [action.payload]: false };
		},
	},
});

export const { setAllRecipes, showRecipeTrue, showRecipeFalse } =
	showRecipeDetailsSlice.actions;
export default showRecipeDetailsSlice.reducer;

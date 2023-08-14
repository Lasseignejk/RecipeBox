import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RecipeProps } from "../util/interfaces";

interface UserInitialState {
	recipe: RecipeProps;
	loading: boolean;
}

const initialState: UserInitialState = {
	recipe: {
		recipe_name: "",
		prep_time: "",
		cook_time: "",
		total_time: "",
		servings: "",
		category: "",
		source: "",
		img: "",
		tags: [],
		ingredients: [],
		instructions: [],
		notes: "",
	},
	loading: false,
};

export const fetchRecipe = createAsyncThunk(
	"recipe/getOne",
	async (id: string) => {
		const response = await fetch(
			import.meta.env.VITE_BACKEND + "/recipe/getOne/" + id,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		return data;
	}
);

export const oneRecipeSlice = createSlice({
	name: "recipe",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchRecipe.pending, (state) => {
			state.loading = true;
		}),
			builder.addCase(fetchRecipe.fulfilled, (state, action) => {
				state.loading = true;
				state.recipe = action.payload;
			}),
			builder.addCase(fetchRecipe.rejected, (state) => {
				state.loading = true;
			});
	},
});

export default oneRecipeSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserInitialState {
	userRecipes: string;
	loading: boolean;
}

const initialState: UserInitialState = {
	userRecipes: "",
	loading: false,
};

export const fetchUserRecipes = createAsyncThunk(
	"user/getRecipes",
	async (id: string) => {
		console.log("userId from frontend", id);
		const response = await fetch(
			import.meta.env.VITE_BACKEND + "/recipe/user/" + id,
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

export const userRecipesSlice = createSlice({
	name: "userRecipes",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUserRecipes.pending, (state) => {
			state.loading = true;
		}),
			builder.addCase(fetchUserRecipes.fulfilled, (state, action) => {
				state.loading = true;
				state.userRecipes = action.payload;
			}),
			builder.addCase(fetchUserRecipes.rejected, (state) => {
				state.loading = true;
			});
	},
});

export default userRecipesSlice.reducer;

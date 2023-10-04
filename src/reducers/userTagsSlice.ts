import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserTagsInitialState {
	options: string[];
	loading: boolean;
}

const initialState: UserTagsInitialState = {
	options: [],
	loading: false,
};
export const fetchUserTags = createAsyncThunk(
	"user/getTags",
	async (id: string) => {
		const response = await fetch(
			import.meta.env.VITE_BACKEND + "/user/tags/" + id,
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

export const userTagsSlice = createSlice({
	name: "userTags",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUserTags.pending, (state) => {
			state.loading = true;
		}),
			builder.addCase(fetchUserTags.fulfilled, (state, action) => {
				state.loading = false;
				state.options = action.payload;
			}),
			builder.addCase(fetchUserTags.rejected, (state) => {
				state.loading = false;
			});
	},
});

export default userTagsSlice.reducer;

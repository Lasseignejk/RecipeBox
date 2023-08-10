import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserInitialState {
	values: {
		_id: string;
		email: string;
		nickname?: string;
		username?: string;
		picture: string;
	};
	loading: boolean;
}

interface UserObject {
	email?: string;
	email_verified?: boolean;
	family_name?: string;
	given_name?: string;
	locale?: string;
	name?: string;
	nickname?: string;
	picture?: string;
	sub?: string;
	updated_at?: string;
}

const initialState: UserInitialState = {
	values: {
		_id: "",
		email: "",
		nickname: "",
		username: "",
		picture: "",
	},
	loading: false,
};
export const fetchUserDetails = createAsyncThunk(
	"user/getDetails",
	async (user: UserObject) => {
		const response = await fetch(
			import.meta.env.VITE_BACKEND + "/user/check",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			}
		);
		const data = await response.json();
		return data;
	}
);

export const userDetailsSlice = createSlice({
	name: "userDetails",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUserDetails.pending, (state) => {
			state.loading = true;
		}),
			builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
				state.loading = false;
				state.values = action.payload;
			}),
			builder.addCase(fetchUserDetails.rejected, (state) => {
				state.loading = false;
			});
	},
});

export default userDetailsSlice.reducer;

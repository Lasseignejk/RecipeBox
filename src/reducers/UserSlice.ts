import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserInitialState {
	values: {
		_id: string;
		email: string;
		nickname?: string;
		username?: string;
		picture: string;
	};
}

const initialState: UserInitialState = {
	values: {
		_id: "",
		email: "",
		nickname: "",
		username: "",
		picture: "",
	},
};

export const userSlice = createSlice({
	name: "mongoUser",
	initialState,
	reducers: {
		updateUser: (state, action) => {
			state.values = action.payload;
		},
	},
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;

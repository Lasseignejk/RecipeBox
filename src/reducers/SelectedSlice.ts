import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SelectedInitialState {
	value: string;
}

const initialState: SelectedInitialState = {
	value: "Home",
};

export const selectedSlice = createSlice({
	name: "selected",
    initialState,
    reducers: {
        setSelected: (state, action: PayloadAction<SelectedInitialState>) => {
            state = action.payload
        }
    }
});

export const {setSelected} = selectedSlice.actions;
export default selectedSlice.reducer;

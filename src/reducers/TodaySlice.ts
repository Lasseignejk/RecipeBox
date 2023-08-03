import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { getAllDaysInWeek } from "../util/calendarFunctions";

interface CurrentWeek {
	date: string;
	today: boolean;
	selected: boolean;
}

interface SelectedInitialState {
	today: string;
	currentWeek: CurrentWeek[];
	counter: number;
	selectedDay: Date | string;
}

const initialState: SelectedInitialState = {
	today: dayjs().toDate().toDateString(),
	selectedDay: dayjs().toDate().toDateString(),
	currentWeek: getAllDaysInWeek(),
	counter: 0,
};

export const todaySlice = createSlice({
	name: "today",
	initialState,
	reducers: {
		incrementCounter: (state) => {
			state.counter += 7;
		},
		decrementCounter: (state) => {
			state.counter -= 7;
		},
		updateCurrentWeek: (state) => {
			state.currentWeek = getAllDaysInWeek("", state.counter);
		},
		updateSelectedDay: (state, action: PayloadAction<string>) => {
			state.selectedDay = new Date(action.payload).toDateString();
		},
	},
});

export const {
	incrementCounter,
	decrementCounter,
	updateCurrentWeek,
	updateSelectedDay,
} = todaySlice.actions;
export default todaySlice.reducer;

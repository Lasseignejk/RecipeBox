import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { getAllDaysInWeek } from "../util/functions";

interface CurrentWeek {
    date: string;
    today: boolean
}

interface SelectedInitialState {
	today: string;
    notToday: string;
    currentWeek: CurrentWeek[]
    notCurrentWeek: CurrentWeek[]
    counter: number
}

const initialState: SelectedInitialState = {
	today: dayjs().toDate().toDateString(),
	notToday: dayjs().toDate().toDateString(),
	currentWeek: getAllDaysInWeek(),
    notCurrentWeek: getAllDaysInWeek(),
    counter: 0
};

export const selectedSlice = createSlice({
	name: "today",
	initialState,
	reducers: {
		incrementCounter: (state) => {
            state.counter += 7
		},
		decrementCounter: (state) => {
            state.counter -= 7
		},
        updateNotCurrentWeek: (state) => {
            state.notCurrentWeek = getAllDaysInWeek("", state.counter)
        }

	},
});

export const { incrementCounter, decrementCounter, updateNotCurrentWeek } = selectedSlice.actions;
export default selectedSlice.reducer;

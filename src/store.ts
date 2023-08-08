import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import selectedReducer from "./reducers/SelectedSlice";
import todayReducer from "./reducers/TodaySlice";
import showMoreReducer from "./reducers/showMoreSlice";
import userReducer from "./reducers/UserSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		selected: selectedReducer,
		today: todayReducer,
		showMore: showMoreReducer,
		mongoUser: userReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

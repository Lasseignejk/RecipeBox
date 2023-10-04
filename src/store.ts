import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import selectedReducer from "./reducers/SelectedSlice";
import todayReducer from "./reducers/TodaySlice";
import showMoreReducer from "./reducers/showRecipeDetailsSlice";
import userReducer from "./reducers/UserSlice";
import userDetailsReducer from "./reducers/userRecipesSlice";
import toggleReducer from "./reducers/toggleSlice";
import oneRecipeReducer from "./reducers/oneRecipeSlice";
import openModalReducer from "./reducers/openModalSlice";

import { useDispatch } from "react-redux";
import userTagsReducer from "./reducers/userTagsSlice";

export const store = configureStore({
	reducer: {
		selected: selectedReducer,
		today: todayReducer,
		showMore: showMoreReducer,
		userDetails: userReducer,
		userRecipes: userDetailsReducer,
		toggle: toggleReducer,
		recipe: oneRecipeReducer,
		openModal: openModalReducer,
		userTags: userTagsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

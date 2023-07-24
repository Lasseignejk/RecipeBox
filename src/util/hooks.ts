import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store"
import { useRef, useEffect } from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDocumentTitle = (title: string): void => {
	useRef(document.title);

	useEffect(() => {
		document.title = title;
	}, [title]);
};

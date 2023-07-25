import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../util/hooks";
import {
	decrementCounter,
	incrementCounter,
	updateCurrentWeek,
} from "../reducers/TodaySlice";

interface MonthsData {
	[key: string]: string;
}

const CalendarNav = () => {
	const dispatch = useAppDispatch();

	const currentWeek = useAppSelector((state) => state.today.currentWeek);

	const months: MonthsData = {
		Jan: "January",
		Feb: "February",
		Mar: "March",
		Apr: "April",
		May: "May",
		Jun: "June",
		Jul: "July",
		Aug: "August",
		Sep: "September",
		Oct: "October",
		Nov: "November",
		Dec: "December",
	};
	const handleIncrement = () => {
		dispatch(incrementCounter());
		dispatch(updateCurrentWeek());
	};

	const handleDecrement = () => {
		dispatch(decrementCounter());
		dispatch(updateCurrentWeek());
	};

	const beginningMonth = months[currentWeek[0].date.slice(4, 7)];
	const beginningDate = currentWeek[0].date.slice(8, 10);
	const endMonth = months[currentWeek[6].date.slice(4, 7)];
	const endDate = currentWeek[6].date.slice(8, 10);
	return (
		<div className={`flex gap-1 text-lightPrimary items-center font-bold`}>
			<button
				onClick={() => handleDecrement()}
				className={`w-8 h-8 flex justify-center items-center text-xl`}>
				<FaCaretLeft />
			</button>
			<h1>
				{beginningMonth} {beginningDate} - {endMonth} {endDate}
			</h1>
			<button
				onClick={() => handleIncrement()}
				className={`w-8 h-8 flex justify-center items-center text-xl`}>
				<FaCaretRight />
			</button>
		</div>
	);
};

export default CalendarNav;

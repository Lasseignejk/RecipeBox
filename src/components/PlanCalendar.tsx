import CalandarSmallDate from "./CalendarSmallDate";
import { useAppSelector } from "../util/hooks";
import CalendarNav from "./CalendarNav";

const PlanCalendar = (): JSX.Element => {
	const today = useAppSelector((state) => state.today.today);
	const currentWeek = useAppSelector((state) => state.today.currentWeek);

	// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday" ]

	return (
		<div>
			<CalendarNav />
			<div className="flex justify-around">
				{currentWeek.map((date, index) => (
					<CalandarSmallDate date={date} key={index} />
				))}
			</div>
		</div>
	);
};

export default PlanCalendar;

import CalandarSmallDate from "./CalendarSmallDate";
import { useAppSelector } from "../util/hooks";
import CalendarNav from "./CalendarNav";

const PlanCalendar = (): JSX.Element => {
	// const today = useAppSelector((state) => state.today.today);
	const currentWeek = useAppSelector((state) => state.today.currentWeek);

	return (
		<div
			className={`py-5 flex flex-col gap-5 bg-lightSurfCon sticky top-0`}>
			<CalendarNav />
			<div className="flex justify-around px-1">
				{currentWeek.map((date, index) => (
					<CalandarSmallDate date={date} key={index} />
				))}
			</div>
		</div>
	);
};

export default PlanCalendar;

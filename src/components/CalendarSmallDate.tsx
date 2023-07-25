interface CalendarProps {
	date: {
		date: string;
		today: boolean;
	};
}

const CalendarSmallDate = ({ date }: CalendarProps): JSX.Element => {
	const dayOfWeek = date.date.slice(0, 3);
	const month = date.date.slice(4, 7);
	const dateNum = date.date.slice(8, 10);

	const formatDateNum = () => {
		if (dateNum[0] == "0") {
			return dateNum[1];
		}
		return dateNum;
	};

	const todayClasses =
		date.today == true
			? "border-2 border-lightPrimary text-lightPrimary font-bold rounded-md"
			: "border-2 border-lightSurf text-lightSecondary";
	return (
		<div
			data-testid="date"
			className={`flex flex-col w-full items-center  ${todayClasses} `}>
			<p className={`text-sm`}>{dayOfWeek}</p>
			<p className={`text-xl`}>{formatDateNum()}</p>
		</div>
	);
};

export default CalendarSmallDate;

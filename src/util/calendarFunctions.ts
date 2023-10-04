export const getSunday = () => {
	const today = new Date(); // Fri Sep 29 2023 10:06:49 GMT-
	// console.log(today.getDate()) // 24 (date of the month)
	// console.log(today.getDay()) // 1 (1 is Monday)
	const sunday = today.getDate() - today.getDay(); // 23
	return new Date(today.setDate(sunday)); // sets the new Date's day to the 23rd
};

export const getAllDaysInWeek = (time: string = "", counter: number = 0) => {
	// we keep track of today so we can bold it and make sure the user can always come back to it
	let today = new Date();
	// day is the day the user clicks on. It defaults to today, but if the user clicks on tomorrow or the next day it will update to that.
	let day = new Date();

	// time not passed, counter passed -- counter keeps track of the current week. If the counter is 0, current week. if we go to next week, the counter will be 7.
	if (time == "" && counter != 0) {
		day.setDate(day.getDate() + counter);

		// both time and counter passed
	} else if (time != "" && counter != 0) {
		day = new Date(time);
		day.setDate(day.getDate() + counter);
	} else if (time != "" && counter == 0) {
		day = new Date(time);
	}
	// neither passed, use today's date

	const currentWeek = [];
	for (let i = 0; i < 7; i++) {
		// finds Sunday then adds 1 each time to get the days for that week
		const dateOfMonth = day.getDate() - day.getDay() + i;
		const dateToAdd = new Date(day.setDate(dateOfMonth));
		currentWeek.push({
			// toDateString cuts off time time from the string so it's just the date info
			date: dateToAdd.toDateString(),
			today: today.toDateString() === dateToAdd.toDateString(),
			selected: false,
		});
	}
	return currentWeek;
};

import { describe, expect, it } from "vitest";
import { getAllDaysInWeek } from "../util/calendarFunctions";

describe("getAllDaysInWeek", () => {
	it("should push dates into an array based on today's date", () => {
		expect(getAllDaysInWeek()).toEqual([
			{ date: "Sun Jul 23 2023", today: false, selected: false },
			{ date: "Mon Jul 24 2023", today: false, selected: false },
			{ date: "Tue Jul 25 2023", today: false, selected: false },
			{ date: "Wed Jul 26 2023", today: true, selected: false },
			{ date: "Thu Jul 27 2023", today: false, selected: false },
			{ date: "Fri Jul 28 2023", today: false, selected: false },
			{ date: "Sat Jul 29 2023", today: false, selected: false },
		]);
	});
	it("should push dates into an array based on inputted date; the today value should not change", () => {
		expect(getAllDaysInWeek("May 1 2023", 0)).toEqual([
			{ date: "Sun Apr 30 2023", today: false, selected: false },
			{ date: "Mon May 01 2023", today: false, selected: false },
			{ date: "Tue May 02 2023", today: false, selected: false },
			{ date: "Wed May 03 2023", today: false, selected: false },
			{ date: "Thu May 04 2023", today: false, selected: false },
			{ date: "Fri May 05 2023", today: false, selected: false },
			{ date: "Sat May 06 2023", today: false, selected: false },
		]);
	});
	it("should push dates into an array based on counter", () => {
		expect(getAllDaysInWeek("", 7)).toEqual([
			{ date: "Sun Jul 30 2023", today: false, selected: false },
			{ date: "Mon Jul 31 2023", today: false, selected: false },
			{ date: "Tue Aug 01 2023", today: false, selected: false },
			{ date: "Wed Aug 02 2023", today: false, selected: false },
			{ date: "Thu Aug 03 2023", today: false, selected: false },
			{ date: "Fri Aug 04 2023", today: false, selected: false },
			{ date: "Sat Aug 05 2023", today: false, selected: false },
		]);
	});
});

import { describe, expect, it } from "vitest";

import { formatTime } from "../util/functions";

describe("formatTime", () => {
	it("should return the recipe time + min if the time is less than 60", () => {
		expect(formatTime(10)).toBe("10 min");
	});
	it("should return the time in hours and minutes if the time is over 60", () => {
		expect(formatTime(90)).toBe("1 hr 30 min");
	});
	it("should return just the hours and no minutes if it takes exactly so many hours", () => {
		expect(formatTime(300)).toBe("5 hrs");
	});
});

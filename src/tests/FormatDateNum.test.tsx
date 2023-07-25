import { describe, expect, it } from "vitest";
import { formatDateNum } from "../util/functions";

describe("formatDateNum", () => {
	it("should take in a string of a two-digit number and return the string if the first character is not a zero", () => {
		expect(formatDateNum("24")).toEqual("24");
	});

	it("should return the second character if the first is a zero", () => {
		expect(formatDateNum("02")).toEqual("2");
	});
});

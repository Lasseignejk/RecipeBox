import { describe, expect, it } from "vitest";

import { formatRecipeName } from "../util/functions";

describe("formatRecipeName", () => {
	it("should return the recipe name if it is less than 10 characters long", () => {
		expect(formatRecipeName("Pasta", 10)).toBe("Pasta");
	});
	it("should slice the name at an index if it is over 10 characters long and add ... to the end", () => {
		expect(formatRecipeName("Spaghetti and Meatballs", 10)).toBe(
			"Spaghetti..."
		);
	});
	it("should slice the name at the last index of a whitespace if the maxLength lands in the last word of the title", () => {
		expect(formatRecipeName("Pork and Beans", 10)).toBe("Pork and...");
	});
});

import { render } from "@testing-library/react";
import CalendarSmallDate from "../components/CalendarSmallDate";
import { describe, expect, it } from "vitest";

describe("CalendarSmallDate", () => {
	it("props are being passed and rendered correctly", () => {
		const props = { date: "Mon", today: false };
		const { getByTestId } = render(<CalendarSmallDate date={props} />);
		const dateValue = getByTestId("date").textContent;
		expect(dateValue).toEqual("Mon");
	});
});

import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

export default function DateRangeCalendarValue() {
	const [value, setValue] = React.useState([
		dayjs("2022-04-17"),
		dayjs("2022-04-21"),
	]);

	return (
		<DemoContainer components={["DateRangeCalendar", "DateRangeCalendar"]}>
			<DemoItem label="Controlled calendar">
				<DateRangeCalendar
					value={value}
					onChange={(newValue) => setValue(newValue)}
				/>
			</DemoItem>
		</DemoContainer>
	);
}

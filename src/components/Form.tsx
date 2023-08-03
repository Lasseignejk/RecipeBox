import Input from "./Input";
import TableTake2 from "./Table/TableTake2";
import { formStateVariableProps, FieldsData } from "../util/interfaces";
import Textarea from "./Textarea";
import { useState } from "react";
import Button from "./Button";

interface FormProps {
	fields: FieldsData[];
	formStateFunction: (obj: formStateVariableProps) => void;
	formStateVariable: formStateVariableProps;
	table?: boolean;
	headers?: string[];
	textarea?: boolean;
}

interface Event {
	target: HTMLInputElement;
}

const Form = ({
	fields,
	table,
	headers,
	formStateFunction,
	formStateVariable,
	textarea,
}: FormProps): JSX.Element => {
	const setFormState = (e: Event) => {
		formStateFunction({
			...formStateVariable,
			[e.target.name]: e.target.value,
		});
	};
	const [textareaRows, setTextareaRows] = useState<number[]>([1]);
	const [newRecipeRows, setNewRecipeRows] = useState<number[]>([0, 1, 2, 3]);

	return (
		<form>
			{fields.map((field: FieldsData, index: number) => (
				<Input
					field={field}
					key={index}
					onChangeFunction={(e: Event) => setFormState(e)}
					formStateVariable={formStateVariable}
					formStateFunction={formStateFunction}
				/>
			))}
			{table && headers && (
				<TableTake2
					headers={headers}
					formStateVariable={formStateVariable}
					formStateFunction={formStateFunction}
					rowsVariable={newRecipeRows}
					rowsFunction={setNewRecipeRows}
				/>
			)}
			{textarea && (
				<Textarea
					rowsVariable={textareaRows}
					rowsStateFunction={setTextareaRows}
				/>
			)}
			{/* <Button passedFunction={} /> */}
		</form>
	);
};

export default Form;

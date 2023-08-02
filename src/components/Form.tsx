import { newRecipeIngredientsFields } from "../util/data";
import Input from "./Input";
import Table from "./Table/Table";

interface formStateVariableProps {
	[key: string]: string;
}

interface FieldsData {
	type: string;
	label: boolean;
	labelText: string;
	value: string;
}

interface FormProps {
	fields: FieldsData[];
	formStateFunction: (obj: formStateVariableProps) => void;
	formStateVariable: formStateVariableProps;
	table?: boolean;
	headers?: string[];
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
}: FormProps): JSX.Element => {
	const setFormState = (e: Event) => {
		formStateFunction({
			...formStateVariable,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form>
			{fields.map((field: FieldsData, index: number) => (
				<Input
					field={field}
					key={index}
					onChangeFunction={(e: Event) => setFormState(e)}
					formStateVariable={formStateVariable}
				/>
			))}
			{table && headers && (
				<Table
					headers={headers}
					onChangeFunction={(e: Event) => setFormState(e)}
					formStateVariable={formStateVariable}
				/>
			)}
		</form>
	);
};

export default Form;

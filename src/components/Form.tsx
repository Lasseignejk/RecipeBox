import Input from "./Input";
import TableTake2 from "./Table/TableTake2";
import { formStateVariableProps, FieldsData } from "../util/interfaces";

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
					formStateFunction={formStateFunction}
				/>
			))}
			{table && headers && (
				// <Table
				// 	headers={headers}
				// 	onChangeFunction={(e: Event) => setFormState(e)}

				// />
				<TableTake2
					headers={headers}
					formStateVariable={formStateVariable}
					formStateFunction={formStateFunction}
				/>
			)}
		</form>
	);
};

export default Form;

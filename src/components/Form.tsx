import Input from "./Input";
import Table from "./Table/Table";
import TableTake2 from "./Table/TableTake2";

interface formStateVariableProps {
	[key: string]: string;
}
interface FieldsData {
	id: number;
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
					formStateFunction={formStateFunction}
				/>
			))}
			{table && headers && (
				// <Table
				// 	headers={headers}
				// 	onChangeFunction={(e: Event) => setFormState(e)}
				// 	formStateVariable={formStateVariable}
				// 	formStateFunction={formStateFunction}
				// />
				<TableTake2 headers={headers} />
			)}
		</form>
	);
};

export default Form;

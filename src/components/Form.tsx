import Input from "./Input";

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
}

interface Event {
	target: HTMLInputElement;
}

const Form = ({
	fields,
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
		</form>
	);
};

export default Form;

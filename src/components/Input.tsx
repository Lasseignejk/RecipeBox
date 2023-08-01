interface formStateVariableProps {
	[key: string]: string;
}

interface Event {
	target: HTMLInputElement;
}

interface InputProps {
	field: FieldsData;
	onChangeFunction?: (e: Event) => void;
	formStateVariable: formStateVariableProps;
}

interface FieldsData {
	type: string;
	label: boolean;
	labelText: string;
	value: string;
}

const Input = ({
	field,
	onChangeFunction,
	formStateVariable,
}: InputProps): JSX.Element => {
	return (
		<>
			{field.label && (
				<div>
					<label htmlFor={field.value}>{field.labelText}</label>
					<input
						type={field.type}
						id={field.value}
						onChange={onChangeFunction}
						value={
							formStateVariable[field.value]
								? formStateVariable[field.value]
								: ""
						}
						name={field.value}
					/>
				</div>
			)}
		</>
	);
};

export default Input;

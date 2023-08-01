interface InputProps {
	field: FieldsData;
}

interface FieldsData {
	type: string;
	label: boolean;
	labelText: string;
	value: string;
}

const Input = ({ field }: InputProps): JSX.Element => {
	return (
		<>
			{field.label && (
				<div>
					<label htmlFor={field.value}>{field.labelText}</label>
					<input type={field.type} id={field.value} />
				</div>
			)}
		</>
	);
};

export default Input;

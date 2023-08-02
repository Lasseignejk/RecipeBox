import { formStateVariableProps, FieldsData } from "../util/interfaces";

interface Event {
	target: HTMLInputElement;
}

interface InputProps {
	field: FieldsData;
	onChangeFunction?: (e: Event) => void;
	formStateVariable?: formStateVariableProps;
	table?: boolean;
	formStateFunction?: (obj: formStateVariableProps) => void;
}

const Input = ({
	field,
	onChangeFunction,
	formStateVariable,
}: InputProps): JSX.Element => {
	return (
		<>
			{field.label && formStateVariable && (
				<div>
					<label htmlFor={field.value}>{field.labelText}</label>
					<input
						type={field.type}
						id={field.value}
						onChange={onChangeFunction}
						value={
							formStateVariable[field.value] !== undefined
								? (formStateVariable[field.value] as string)
								: ""
						}
						name={field.value}
					/>
				</div>
			)}
			{/* {!field.label && formStateVariable && (
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
			)} */}
			{/* {table && (
				<input
					type={field.type}
					id={field.value}
					onChange={(e) => setOneIngredientTableState(e)}
					value={
						oneIngredient[field.value]
							? oneIngredient[field.value]
							: ""
					}
					name={field.value}
				/>
			)} */}
		</>
	);
};

export default Input;

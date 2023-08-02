import { useState } from "react";

interface formStateVariableProps {
	[key: string]: string;
}

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

interface FieldsData {
	id: number;
	type: string;
	label: boolean;
	labelText?: string;
	value: string;
}

interface IngredientsState {
	[key: string]: string;
}

const Input = ({
	field,
	onChangeFunction,
	formStateVariable,
	table,
	formStateFunction,
}: InputProps): JSX.Element => {
	const [allIngredients, setAllIngredients] = useState<IngredientsState[]>(
		[]
	);

	const [oneIngredient, setOneIngredient] = useState<object>({});

	const setOneIngredientTableState = (e: Event) => {
		setOneIngredient({
			...oneIngredient,
			[e.target.name]: e.target.value,
		});
	};

	const setIngredientsTableState = () => {
		setAllIngredients([...allIngredients, { ...oneIngredient }]);
	};

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
							formStateVariable[field.value]
								? formStateVariable[field.value]
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
			{table && (
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
			)}
		</>
	);
};

export default Input;

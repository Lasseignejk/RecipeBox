import { useState } from "react";
import TableRow from "./TableRow";
import { formStateVariableProps } from "../../util/interfaces";

interface TableHeaders {
	headers: string[];
	formStateFunction: (obj: formStateVariableProps) => void;
	formStateVariable: formStateVariableProps;
	rowsVariable: number[];
	rowsFunction: (array: number[]) => void;
}

const TableTake2 = ({
	headers,
	formStateFunction,
	formStateVariable,
	rowsVariable,
	rowsFunction,
}: TableHeaders) => {
	const [formData, setFormData] = useState([
		{
			ingredient_name: "",
			ingredient_amount: "",
			ingredient_measurement: "",
			ingredient_directions: "",
		},
		{
			ingredient_name: "",
			ingredient_amount: "",
			ingredient_measurement: "",
			ingredient_directions: "",
		},
		{
			ingredient_name: "",
			ingredient_amount: "",
			ingredient_measurement: "",
			ingredient_directions: "",
		},
		{
			ingredient_name: "",
			ingredient_amount: "",
			ingredient_measurement: "",
			ingredient_directions: "",
		},
	]);

	const handleInputChange = (index: number, name: string, value: string) => {
		const updatedFormData = [...formData];
		updatedFormData[index] = { ...updatedFormData[index], [name]: value };
		setFormData(updatedFormData);
	};

	const handleSubmit = async () => {
		let filteredIngredients = formData.filter(
			(ingredient) => ingredient.ingredient_name != ""
		);
		formStateFunction({
			...formStateVariable,
			ingredients: filteredIngredients,
		});
		console.log(formStateVariable);

		const response = await fetch(
			import.meta.env.VITE_BACKEND + "/recipe/new",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formStateVariable),
			}
		);
		console.log(response);
	};

	const handleAddRow = () => {
		setFormData([
			...formData,
			{
				ingredient_name: "",
				ingredient_amount: "",
				ingredient_measurement: "",
				ingredient_directions: "",
			},
		]);
		rowsFunction([...rowsVariable, rowsVariable.length + 1]);
	};
	return (
		<div>
			<table className="border-2">
				<thead>
					<tr className="border-2">
						{headers.map((header, index) => (
							<th key={index}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rowsVariable.map((row) => (
						<TableRow
							key={row}
							index={row}
							onInputChange={handleInputChange}
							formData={formData}
						/>
					))}
				</tbody>
			</table>
			<button type="button" onClick={handleAddRow}>
				Add Row
			</button>
			<button type="button" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default TableTake2;

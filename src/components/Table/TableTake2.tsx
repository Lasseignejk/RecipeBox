import { useState } from "react";
import TableRow from "./TableRow";

interface TableHeaders {
	headers: string[];
}

const TableTake2 = ({ headers }: TableHeaders) => {
	const [fields, setFields] = useState([1, 1, 1, 1]);

	const [formData, setFormData] = useState([
		{
			ingredient_name: null,
			ingredient_amount: null,
			ingredient_measurement: null,
			ingredient_directions: null,
		},
	]);

	const handleInputChange = (index: number, name: string, value: string) => {
		const updatedFormData = [...formData];
		updatedFormData[index] = { ...updatedFormData[index], [name]: value };
		setFormData(updatedFormData);
	};

	console.log(formData);

	const handleAddRow = () => {
		setFormData([
			...formData,
			{
				ingredient_name: null,
				ingredient_amount: null,
				ingredient_measurement: null,
				ingredient_directions: null,
			},
		]);
		setFields([...fields, 1]);
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
					{fields.map((field, index) => (
						<TableRow
							key={index}
							field={field}
							index={index}
							onInputChange={handleInputChange}
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

interface FormDataProps {
	ingredient_name: string;
	ingredient_amount: string;
	ingredient_measurement: string;
	ingredient_directions: string;
}

interface TableRowProps {
	index: number;
	onInputChange: (index: number, name: string, value: string) => void;
	formData: FormDataProps[];
}

interface Event {
	target: HTMLInputElement;
}

const TableRow = ({ index, onInputChange, formData }: TableRowProps) => {
	const handleInputChange = (e: Event) => {
		const { name, value } = e.target;
		onInputChange(index, name, value);
	};
	return (
		<tr>
			<td>
				<input
					type="text"
					name="ingredient_amount"
					value={
						formData[index]?.ingredient_amount != ""
							? formData[index]?.ingredient_amount
							: ""
					}
					onChange={handleInputChange}
				/>
			</td>
			<td>
				<input
					type="text"
					name="ingredient_measurement"
					value={
						formData[index]?.ingredient_measurement != ""
							? formData[index]?.ingredient_measurement
							: ""
					}
					onChange={handleInputChange}
				/>
			</td>
			<td>
				<input
					type="text"
					name="ingredient_name"
					value={
						formData[index]?.ingredient_name != ""
							? formData[index]?.ingredient_name
							: ""
					}
					onChange={handleInputChange}
				/>
			</td>
			<td>
				<input
					type="text"
					name="ingredient_directions"
					value={
						formData[index]?.ingredient_directions != ""
							? formData[index]?.ingredient_directions
							: ""
					}
					onChange={handleInputChange}
				/>
			</td>
		</tr>
	);
};

export default TableRow;

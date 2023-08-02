const TableRow = ({ field, index, onInputChange }) => {
	const handleInputChange = (e) => {
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
						field.ingredient_amount != null
							? ""
							: field.ingredient_amount
					}
					onChange={handleInputChange}
				/>
			</td>
			<td>
				<input
					type="text"
					name="ingredient_measurement"
					value={
						field.ingredient_measurement != null
							? ""
							: field.ingredient_measurement
					}
					onChange={handleInputChange}
				/>
			</td>
			<td>
				<input
					type="text"
					name="ingredient_name"
					value={
						field.ingredient_name != null
							? ""
							: field.ingredient_name
					}
					onChange={handleInputChange}
				/>
			</td>
			<td>
				<input
					type="text"
					name="ingredient_directions"
					value={
						field.ingredient_directions != null
							? ""
							: field.ingredient_directions
					}
					onChange={handleInputChange}
				/>
			</td>
		</tr>
	);
};

export default TableRow;

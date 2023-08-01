interface TableHeaders {
	headers: string[];
}

const Table = ({ headers }: TableHeaders) => {
	const renderRows = (num: number) => {
		const rows = [];
		for (let i = 0; i < num; i++) {
			rows.push(
				<tr className="border-2" key={i}>
					{renderCols(headers.length)}
				</tr>
			);
		}
		return rows;
	};

	const renderCols = (num: number) => {
		const cols = [];

		for (let i = 0; i < num; i++) {
			cols.push(
				<td key={i}>
					<input type="text" />
				</td>
			);
		}
		return cols;
	};
	return (
		<table className="border-2">
			<thead>
				<tr className="border-2">
					{headers.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>{renderRows(4)}</tbody>
		</table>
	);
};

export default Table;

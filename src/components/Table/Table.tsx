import Input from "../Input";

interface formStateVariableProps {
	[key: string]: string;
}

interface Event {
	target: HTMLInputElement;
}

interface TableHeaders {
	headers: string[];
	onChangeFunction?: (e: Event) => void;
	formStateVariable: formStateVariableProps;
}

const Table = ({
	headers,
	onChangeFunction,
	formStateVariable,
}: TableHeaders) => {
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
		const fields = [
			{
				type: "text",
				label: false,
				value: "name",
			},
			{
				type: "text",
				label: false,
				value: "amount",
			},
			{
				type: "text",
				label: false,
				value: "measurement",
			},
			{
				type: "text",
				label: false,
				value: "total",
			},
		];

		for (let i = 0; i < num; i++) {
			cols.push(
				<td key={i}>
					<Input
						field={fields[i]}
						onChangeFunction={onChangeFunction}
						formStateVariable={formStateVariable}
					/>
				</td>
			);
		}
		return cols.flat();
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

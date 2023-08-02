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
	formStateVariable?: formStateVariableProps;
	formStateFunction?: (obj: formStateVariableProps) => void;
}

const Table = ({
	headers,
	onChangeFunction,
	formStateVariable,
	formStateFunction,
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
				id: 1,
				type: "text",
				label: false,
				value: "name",
			},
			{
				id: 2,
				type: "text",
				label: false,
				value: "amount",
			},
			{
				id: 3,
				type: "text",
				label: false,
				value: "measurement",
			},
			{
				id: 4,
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
						table={true}
						formStateFunction={formStateFunction}
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

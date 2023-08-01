import Input from "./Input";

interface FieldsData {
	type: string,
	label: boolean,
	labelText: string,
	value: string
}

interface FormProps {
	fields: FieldsData[]
}

const Form = ({ fields }:FormProps):JSX.Element => {
	return (
		<form action="">
			{fields.map((field:FieldsData, index:number) => (
				<Input field={field} key={index}/>
			))}
		</form>
	);
};

export default Form;

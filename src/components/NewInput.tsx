import { useField } from "formik";

interface InputProps {
	label?: string;
	name: string;
	type: string;
	placeholder: string;
}

const NewInput = ({ label, ...props }: InputProps) => {
	const [field, meta] = useField(props);
	return (
		<div className="form_input">
			<label htmlFor={props.name} className="font-bold">
				{label}
			</label>
			<input className="text_input w-36" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

export default NewInput;

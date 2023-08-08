import { useField } from "formik";

interface InputProps {
	label?: string;
	name: string;
	type: string;
	placeholder?: string;
	xsm?: boolean;
	sm?: boolean;
	md?: boolean;
	lg?: boolean;
	xl?: boolean;
	center?: boolean;
	smText?: boolean;
}

const NewInput = ({ label, ...props }: InputProps) => {
	const [field, meta] = useField(props);

	const xsmClasses = props.xsm ? "w-14" : "";
	const smClasses = props.sm ? "w-24" : "";
	const mdClasses = props.md ? "w-36" : "";
	const lgClasses = props.lg ? "w-48" : "";
	const xlClasses = props.xl ? "w-full" : "";
	const centerClasses = props.center ? "items-center md:items-start" : "";
	const smTextClasses = props.smText ? "text-sm" : "";
	return (
		<div className={`form_input ${centerClasses} ${xlClasses}`}>
			<label
				htmlFor={props.name}
				className={`font-bold ${smTextClasses}`}>
				{label}
			</label>
			<input
				className={`text_input ${xsmClasses} ${smClasses} ${mdClasses} ${lgClasses} ${xlClasses}`}
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

export default NewInput;

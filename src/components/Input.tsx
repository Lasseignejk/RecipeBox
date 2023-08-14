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

const Input = ({ label, ...props }: InputProps): JSX.Element => {
	const [field, meta] = useField(props);

	const xsmClasses: string = props.xsm ? `w-14` : ``;
	const smClasses: string = props.sm ? "w-24" : "";
	const mdClasses: string = props.md ? "w-36" : "";
	const lgClasses: string = props.lg ? "w-48" : "";
	const xlClasses: string = props.xl ? "w-full" : "";
	const smTextClasses: string = props.smText ? "text-sm" : "";
	const centerClasses: string = props.center
		? "items-center md:items-start"
		: "";

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

export default Input;

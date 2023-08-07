import { FaTimes } from "react-icons/fa";
import Button from "./Button";
import Form from "./Form";
import { formStateVariableProps, FieldsData } from "../util/interfaces";
import FormikForm from "./FormikForm";

interface ModalProps {
	form: boolean;
	table: boolean;
	headers?: string[];
	fields?: FieldsData[];
	text?: string;
	title?: string;
	openStateFunction?: (bool: boolean) => void;
	openStateVariable?: boolean;
	formStateFunction?: (obj: formStateVariableProps) => void;
	formStateVariable?: formStateVariableProps;
}

const Modal = ({
	form,
	table,
	headers,
	fields,
	text,
	title,
	openStateFunction,
	openStateVariable,
	formStateFunction,
	formStateVariable,
}: ModalProps): JSX.Element => {
	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center p-5 py-10 border-2 bg-lightModalBack z-10">
			<div className="relative flex flex-col items-center bg-lightSurfCon w-[90%] h-full rounded-xl px-5 gap-3 overflow-auto py-5">
				{openStateFunction && (
					<Button
						icon={<FaTimes />}
						passedFunction={() =>
							openStateFunction(!openStateVariable)
						}
						outline={false}
						absolute={true}
						top={"top-[10px]"}
						right={"right-[10px]"}
					/>
				)}

				{title && <h1>{title}</h1>}
				{form && fields && formStateFunction && formStateVariable && (
					// <Form
					// 	fields={fields}
					// 	formStateFunction={formStateFunction}
					// 	formStateVariable={formStateVariable}
					// 	table={table}
					// 	headers={headers}
					// 	textarea={true}
					// />
					<FormikForm />
				)}
				{text}
			</div>
		</div>
	);
};

export default Modal;

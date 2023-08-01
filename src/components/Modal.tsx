import Form from "./Form";

interface FieldsData {
	type: string;
	label: boolean;
	labelText: string;
	value: string;
}

interface ModalProps {
	form: boolean;
	fields?: FieldsData[];
	text?: string;
	title?: string;
}

const Modal = ({ form, fields, text, title }: ModalProps): JSX.Element => {
	return (
		<dialog>
			{title && <h1>{title}</h1>}
			{form && fields && <Form fields={fields} />}
			{text}
		</dialog>
	);
};

export default Modal;

import { FaTimes } from "react-icons/fa";
import Button from "./Button";
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
	stateFunction?: (bool: boolean) => void;
	stateVariable?: boolean;
}

const Modal = ({
	form,
	fields,
	text,
	title,
	stateFunction,
	stateVariable,
}: ModalProps): JSX.Element => {
	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center p-5 py-10 border-2 bg-lightModalBack z-10">
			<div className="relative flex flex-col items-center bg-lightSurfCon w-[90%] h-full rounded-xl px-5 gap-3 overflow-auto py-5">
				{stateFunction && (
					<Button
						icon={<FaTimes />}
						passedFunction={() => stateFunction(!stateVariable)}
						outline={false}
						absolute={true}
						top={"top-[10px]"}
						right={"right-[10px]"}
					/>
				)}

				{title && <h1>{title}</h1>}
				{form && fields && <Form fields={fields} />}
				{text}
			</div>
		</div>
	);
};

export default Modal;

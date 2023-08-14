import { FaTimes } from "react-icons/fa";
import Button from "./Button";
import PageTitle from "./PageTitle";
import { ReactNode } from "react";

interface ModalProps {
	form: ReactNode;
	text?: string;
	title?: string;
	openStateFunction?: (bool: boolean) => void;
	openStateVariable?: boolean;
}

const Modal = ({
	form,
	text,
	title,
	openStateFunction,
	openStateVariable,
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

				{title && <PageTitle title={title} />}
				{form && form}
				{text}
			</div>
		</div>
	);
};

export default Modal;

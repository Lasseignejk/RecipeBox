import React from "react";

interface ButtonProps {
	text: string;
	passedFunction: () => void;
	outline: boolean;
	color?: string;
	absolute?: boolean;
}

const Button = ({
	text,
	passedFunction,
	outline,
	color,
	absolute,
}: ButtonProps) => {
	const outlineClasses = outline
		? "border-[1px] border-lightOutline px-3 text-sm rounded-xl hover:scale-105 duration-200 ease-in-out"
		: "";
	const absoluteClasses = absolute ? "absolute top-3 right-3" : "";
	return (
		<button
			onClick={() => passedFunction()}
			className={`text-lightPrimary ${outlineClasses} ${absoluteClasses}`}>
			{text}
		</button>
	);
};

export default Button;

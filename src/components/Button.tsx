import React, { ReactNode } from "react";

interface ButtonProps {
	text?: string;
	icon?: ReactNode;
	passedFunction: () => void;
	outline: boolean;
	color?: string;
	absolute?: boolean;
	top?: string;
	right?: string;
}

const Button = ({
	text,
	icon,
	passedFunction,
	outline,
	color,
	absolute,
	top,
	right,
}: ButtonProps) => {
	const outlineClasses = outline
		? "border-[1px] border-lightOutline px-3 text-sm rounded-xl hover:scale-105 duration-200 ease-in-out"
		: "";
	const absoluteClasses = absolute ? "absolute" : "";
	const iconClasses = icon ? "text-xl" : "";
	return (
		<button
			onClick={() => passedFunction()}
			className={`text-lightPrimary ${outlineClasses} ${absoluteClasses} ${iconClasses} ${top} ${right}`}>
			{text ? text : icon}
		</button>
	);
};

export default Button;

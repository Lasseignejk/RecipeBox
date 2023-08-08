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
	rounded?: boolean;
	style?: string;
	extraClasses?: string;
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
	rounded,
	style,
	extraClasses,
}: ButtonProps) => {
	const outlineClasses = outline
		? "border-[1px] border-lightOutline px-4 text-sm rounded-xl hover:scale-105 duration-200 ease-in-out"
		: "";
	const absoluteClasses = absolute ? "absolute" : "";
	const iconClasses = icon ? "text-lg" : "";
	const defaultClasses =
		style == "default"
			? "bg-lightSecondary text-lightSurfCon rounded-full px-4 py-1"
			: "";
	const invertedClasses =
		style == "inverted"
			? "border-[1px] border-lightOutline px-4 rounded-full"
			: "";
	const roundedClasses = rounded ? "px-4 py-1 rounded-full" : "";
	const colorClasses = color ? `${color}` : "text-lightPrimary";
	return (
		<button
			type="button"
			onClick={() => passedFunction()}
			className={` ${outlineClasses} ${absoluteClasses} ${iconClasses} ${top} ${right} ${colorClasses} ${roundedClasses} ${defaultClasses} ${invertedClasses} ${extraClasses}`}>
			{text ? text : icon}
		</button>
	);
};

export default Button;

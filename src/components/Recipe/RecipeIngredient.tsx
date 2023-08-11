import { useState } from "react";
import { IngredientsProps } from "../../util/interfaces";
import { FaBox, FaCheck, FaCheckSquare } from "react-icons/fa";

interface RecipeIngredientProps {
	data: IngredientsProps;
	textSm: boolean;
	listStyle: "none" | "disc" | "decimal";
	allowLineThrough: boolean;
}

const RecipeIngredient = ({
	data,
	textSm,
	listStyle,
	allowLineThrough,
}: RecipeIngredientProps): JSX.Element => {
	const {
		ingredient_name,
		ingredient_amount,
		ingredient_directions,
		ingredient_measurement,
	} = data;

	const [lineThrough, setLineThrough] = useState(false);
	const [checked, setChecked] = useState(false);

	const handleLineThrough = () => {
		if (allowLineThrough) {
			setLineThrough(!lineThrough);
			setChecked(!checked);
		}
	};

	const checkBox = checked ? <FaCheck /> : "";

	const allowLineThroughClasses: string = allowLineThrough
		? "hover:cursor-pointer"
		: "";
	const lineThroughClasses: string = lineThrough ? "line-through" : "";
	const textSmClasses: string = textSm ? "text-sm" : "";
	const listStyleNone: string = listStyle == "none" ? "list-none" : "";
	const listStyleDisc: string = listStyle == "disc" ? "list-disc" : "";
	const listStyleDecimal: string =
		listStyle == "decimal" ? "list-decimal" : "";

	return (
		<li
			className={`flex gap-3 items-center ${textSmClasses} ${listStyleNone} ${listStyleDisc} ${listStyleDecimal} ${lineThroughClasses} ${allowLineThroughClasses}`}
			onClick={() => handleLineThrough()}>
			{allowLineThrough && (
				<div
					className={`w-4 h-4 border-2 border-lightSecondary relative`}>
					<span className="absolute top-[-2px] text-lightTertiary">
						{checkBox}
					</span>
				</div>
			)}
			<div className="w-full">
				{ingredient_amount && ingredient_amount}{" "}
				{ingredient_measurement && ingredient_measurement}{" "}
				<span className="font-bold">{ingredient_name}</span>
				{ingredient_directions && (
					<>
						{", "}
						{ingredient_directions}
					</>
				)}
			</div>
		</li>
	);
};

export default RecipeIngredient;

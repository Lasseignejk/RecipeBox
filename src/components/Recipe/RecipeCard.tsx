import { FaCaretDown, FaRegClock, FaUtensilSpoon } from "react-icons/fa";
import { PiCookingPot, PiKnifeFill, PiTimerBold } from "react-icons/pi";
import { formatRecipeName, formatTime } from "../../util/functions";
import Button from "../Button";

interface RecipeCardProps {
	data: RecipeData;
	column: boolean;
}

interface RecipeData {
	recipe_name: string;
	prep_time: number;
	cook_time: number;
	total_time: number;
	servings: number;
	category: string;
	source: string;
	img?: string;
	ingredients: IngredientsData[];
	instructions: InstructionsData[];
	notes: string;
	tags?: string[];
}

interface IngredientsData {
	ingredient_name: string;
	ingredient_amount: string | null;
	ingredient_measurement: string | null;
	ingredient_directions: string | null;
	ingredient_total: string;
	ingredient_category: string | null;
}

interface InstructionsData {
	step: number;
	instruction: string;
}

const RecipeCard = ({ data, column }: RecipeCardProps) => {
	const columnClasses = column
		? "recipe_card_horizontal gap-1"
		: "recipe_card_vertical gap-1 w-full max-w-[350px]";
	const imageColumnClasses = column
		? "w-14 h-14 rounded-xl object-cover"
		: "w-36 h-36 rounded-xl object-cover";

	return (
		<div
			className={`relative ${columnClasses} bg-lightSurfConLow p-3 rounded-xl`}>
			<Button
				icon={<FaCaretDown />}
				passedFunction={() => console.log("clicked")}
				outline={false}
				absolute={true}
				top="top-3"
				right="right-3"
			/>
			{data.img && (
				<img
					src={data.img}
					className={`recipe_img ${imageColumnClasses}`}
				/>
			)}

			<h1 className={`font-bold recipe_title pl-1`}>
				{formatRecipeName(data.recipe_name, 26)}
			</h1>

			<div
				className={`recipe_prep flex gap-2 items-center pl-1 justify-center text-[13px]`}>
				<PiKnifeFill />
				{formatTime(data.prep_time)}
			</div>
			<div
				className={`recipe_cook flex gap-2 items-center justify-center text-[13px]`}>
				<PiCookingPot />
				{formatTime(data.cook_time)}
			</div>
			<div
				className={`recipe_total flex gap-2 items-center justify-center text-[13px]`}>
				<PiTimerBold />
				{formatTime(data.total_time)}
			</div>

			<div className={`recipe_tags flex gap-3 justify-center mt-2`}>
				{data.tags &&
					data.tags.map((tag) => (
						<span
							className={`px-3 rounded-xl border-lightOutlineVar border-[1px] text-lightSecondary text-sm`}>
							{tag}
						</span>
					))}
			</div>
		</div>
	);
};

export default RecipeCard;

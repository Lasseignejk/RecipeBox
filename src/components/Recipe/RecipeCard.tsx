import { FaCalendarPlus, FaCaretDown, FaEdit, FaPlus } from "react-icons/fa";
import { PiCookingPot, PiKnifeFill, PiTimerBold } from "react-icons/pi";
import { formatRecipeName, formatTime } from "../../util/functions";
import Button from "../Button";
import Tag from "../Tag";
import { useAppDispatch } from "../../store";
import { useAppSelector } from "../../util/hooks";
import { setSelectedRecipe } from "../../reducers/SelectedSlice";
import RecipeIngredient from "./RecipeIngredient";
import {
	showRecipeFalse,
	showRecipeTrue,
} from "../../reducers/showRecipeDetailsSlice";
import { useState } from "react";
import { RecipeProps } from "../../util/interfaces";
import { Link } from "react-router-dom";
import { setOpenEditModal } from "../../reducers/openModalSlice";

interface RecipeCardProps {
	data: RecipeProps;
	column: boolean;
}

const RecipeCard = ({ data, column }: RecipeCardProps): JSX.Element => {
	const dispatch = useAppDispatch();

	const showRecipe = useAppSelector((state) => state.showMore.showRecipe);

	const [buttonClasses, setButtonClasses] = useState<string>("");

	const [ingredientsClasses, setIngredientsClasses] =
		useState<string>("hidden");

	const columnClasses: string = column
		? "recipe_card_horizontal gap-1"
		: "recipe_card_vertical gap-1 w-full max-w-[350px]";
	const imageColumnClasses: string = column
		? "w-14 h-14 rounded-xl object-cover"
		: "w-36 h-36 rounded-xl object-cover";

	const handleOpen = (): void => {
		showRecipe[data.recipe_name] == true ? closeSection() : openSection();
	};

	const openSection = (): void => {
		dispatch(showRecipeTrue(data.recipe_name));
		setButtonClasses("rotate-180 ease-in duration-200");
		setIngredientsClasses("block");
	};

	const closeSection = (): void => {
		dispatch(showRecipeFalse(data.recipe_name));
		setButtonClasses("rotate-0 ease-in duration-200");
		setIngredientsClasses("hidden");
	};

	const handleEditRecipe = (id: string) => {
		dispatch(setSelectedRecipe(id));
		dispatch(setOpenEditModal());
	};
	return (
		<div
			className={`relative ${columnClasses} bg-lightSurfConLow p-3 rounded-xl`}>
			{data.ingredients[0].ingredient_name != "" && (
				<Button
					icon={<FaCaretDown />}
					passedFunction={handleOpen}
					outline={false}
					absolute={true}
					top="top-3"
					right="right-3"
					extraClasses={`${buttonClasses}`}
				/>
			)}

			{data.img ? (
				<img
					src={data.img}
					className={`recipe_img ${imageColumnClasses}`}
				/>
			) : (
				<div
					className={`recipe_img border-2 ${imageColumnClasses}`}></div>
			)}

			<Link
				to={`/recipes/${data.recipe_name}`}
				className={`font-bold recipe_title pl-1 hover:cursor-pointer`}
				onClick={() => dispatch(setSelectedRecipe(data._id as string))}>
				{formatRecipeName(data.recipe_name, 26)}
			</Link>

			<div
				className={`recipe_prep flex gap-2 items-center pl-1 justify-center text-[13px]`}>
				<PiKnifeFill />
				{data.prep_time ? formatTime(parseInt(data.prep_time)) : ""}
			</div>
			<div
				className={`recipe_cook flex gap-2 items-center justify-center text-[13px]`}>
				<PiCookingPot />
				{data.cook_time ? formatTime(parseInt(data.cook_time)) : ""}
			</div>
			<div
				className={`recipe_total flex gap-2 items-center justify-center text-[13px]`}>
				<PiTimerBold />
				{data.total_time ? formatTime(parseInt(data.total_time)) : ""}
			</div>

			{data.tags.length != 1 ? (
				<div className={`recipe_tags flex gap-3 justify-center mt-2`}>
					{data.tags.map((tag: string, index: number) => (
						<Tag tag={tag} key={index} />
					))}
				</div>
			) : (
				""
			)}

			<div
				className={`recipe_ingredients flex flex-col gap-1 pt-2 ${ingredientsClasses}`}>
				{data.ingredients.map((ingredient, index) => (
					<RecipeIngredient
						data={ingredient}
						key={index}
						textSm={true}
						listStyle="none"
						allowLineThrough={false}
					/>
				))}
			</div>
			<div className={`recipe_edit ${ingredientsClasses}`}>
				<Button
					text="Edit"
					icon={<FaEdit />}
					outline={true}
					passedFunction={() => handleEditRecipe(data._id as string)}
				/>
			</div>

			<div className="recipe_add_buttons flex justify-center gap-14 pt-2">
				<Button
					icon={<FaPlus />}
					passedFunction={() => console.log("clicked")}
					outline={false}
					color={""}
					style={"inverted"}
					rounded={false}
				/>
				<Button
					icon={<FaCalendarPlus />}
					passedFunction={() =>
						console.log("trigger modal with calendar")
					}
					outline={false}
					color={"bg-lightSecondary text-lightSurfConLow"}
					rounded={true}
				/>
			</div>
		</div>
	);
};

export default RecipeCard;

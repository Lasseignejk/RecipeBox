import React, { useEffect } from "react";
import { recipes } from "../../util/recipes";
import RecipeCard from "./RecipeCard";
import { useAppDispatch } from "../../store";
import { useAppSelector } from "../../util/hooks";
import { setAllRecipes } from "../../reducers/showMoreSlice";

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

interface RecipeContainerProps {
	column: boolean;
}

interface FormattedData {
	[recipeName: string]: boolean;
}

const RecipeContainer = ({ column }: RecipeContainerProps): JSX.Element => {
	const dispatch = useAppDispatch();
	const allRecipes = useAppSelector((state) => state.showMore.showRecipe);
	const columnClasses = column
		? "flex flex-col gap-5"
		: "flex flex-wrap gap-5 justify-center";

	const formatRecipes = (recipes: RecipeData[]): FormattedData => {
		let formattedData = {};
		recipes.map(
			(recipe) =>
				(formattedData = {
					...formattedData,
					[recipe.recipe_name]: false,
				})
		);
		return formattedData;
	};
	const recipeData = formatRecipes(recipes);

	useEffect(() => {
		dispatch(setAllRecipes(recipeData));
	}, []);

	return (
		<div className={`pt-3 ${columnClasses}`}>
			{recipes.map((recipe, index) => (
				<RecipeCard data={recipe} key={index} column={column} />
			))}
		</div>
	);
};

export default RecipeContainer;

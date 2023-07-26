import React from "react";
import { recipes } from "../../util/recipes";
import RecipeCard from "./RecipeCard";

interface RecipeContainerProps {
	column: boolean;
}

const RecipeContainer = ({ column }: RecipeContainerProps): JSX.Element => {
	return (
		<div>
			{recipes.map((recipe, index) => (
				<RecipeCard data={recipe} key={index} />
			))}
		</div>
	);
};

export default RecipeContainer;

import React from "react";
import { recipes } from "../../util/recipes";
import RecipeCard from "./RecipeCard";

interface RecipeContainerProps {
	column: boolean;
}

const RecipeContainer = ({ column }: RecipeContainerProps): JSX.Element => {
	const columnClasses = column ? "flex flex-col gap-5" : "flex flex-wrap";
	return (
		<div className={`pt-3 ${columnClasses}`}>
			{recipes.map((recipe, index) => (
				<RecipeCard data={recipe} key={index} column={column} />
			))}
		</div>
	);
};

export default RecipeContainer;

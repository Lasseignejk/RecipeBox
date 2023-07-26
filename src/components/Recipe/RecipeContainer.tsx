import React from "react";
import { recipes } from "../../util/recipes";
import RecipeCard from "./RecipeCard";

interface RecipeContainerProps {
	column: boolean;
}

const RecipeContainer = ({ column }: RecipeContainerProps): JSX.Element => {
	const columnClasses = column ? "flex flex-col" : "flex flex-wrap";
	return (
		<div className={`${columnClasses}`}>
			{recipes.map((recipe, index) => (
				<RecipeCard data={recipe} key={index} column={column} />
			))}
		</div>
	);
};

export default RecipeContainer;

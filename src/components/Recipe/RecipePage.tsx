import { useAppSelector } from "../../util/hooks";

const RecipePage = (): JSX.Element => {
	const selectedRecipe = useAppSelector((state) => state.selected.recipe);
	console.log(selectedRecipe);
	return <div>RecipePage</div>;
};

export default RecipePage;

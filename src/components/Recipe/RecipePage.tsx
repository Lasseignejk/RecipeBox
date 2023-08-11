import { useAppSelector } from "../../util/hooks";
import Button from "../Button";
import PageTitle from "../PageTitle";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import RecipeIngredient from "./RecipeIngredient";

const RecipePage = (): JSX.Element => {
	const navigate = useNavigate();
	const selectedRecipe = useAppSelector((state) => state.selected.recipe);
	const userRecipes = useAppSelector(
		(state) => state.userRecipes.userRecipes
	);

	const selectedUserRecipe = userRecipes.filter(
		(recipe) => recipe.recipe_name == selectedRecipe
	)[0];
	return (
		<div className="p-3 flex flex-col gap-3 pb-20">
			<Button
				passedFunction={() => navigate(-1)}
				outline={false}
				text="Back to all receipes"
				extraClasses="text-sm w-[150px] border-[1px] rounded-full hover:shadow-lg ease-in duration-200"
			/>
			{selectedUserRecipe.img && (
				<div className="flex justify-center">
					<img
						src={selectedUserRecipe.img}
						alt={selectedUserRecipe.recipe_name}
						className="rounded-xl"
					/>
				</div>
			)}
			<PageTitle title={selectedRecipe} center={true} />
			<p>{selectedUserRecipe.source}</p>
			<div>
				<SectionTitle title={"Ingredients"} />
				<ul className="pl-5">
					{selectedUserRecipe.ingredients.map((ingredient) => (
						<RecipeIngredient
							data={ingredient}
							textSm={false}
							listStyle="none"
							allowLineThrough={true}
						/>
					))}
				</ul>
			</div>
			<div>
				<SectionTitle title={"Instructions"} />
				<ol className="pl-10">
					{selectedUserRecipe.instructions.map((instruction) => (
						<li className={`list-decimal`}>
							{instruction.instruction}
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default RecipePage;

import { useAppSelector } from "../../util/hooks";
import Button from "../Button";
import PageTitle from "../PageTitle";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import RecipeIngredient from "./RecipeIngredient";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useAppDispatch } from "../../store";
import { setOpenEditModal } from "../../reducers/openModalSlice";
import Modal from "../Modal";
import EditRecipeForm from "../EditRecipeForm";
import { useEffect } from "react";
import { fetchRecipe } from "../../reducers/oneRecipeSlice";

const RecipePage = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const selectedRecipe = useAppSelector((state) => state.selected.recipe);
	console.log("recipe_page", selectedRecipe);
	const userRecipes = useAppSelector(
		(state) => state.userRecipes.userRecipes
	);
	const openEditRecipeModal: boolean = useAppSelector(
		(state) => state.openModal.openEditModal
	);

	const selectedUserRecipe = userRecipes.filter(
		(recipe) => recipe._id == selectedRecipe
	)[0];
	useEffect(() => {
		dispatch(fetchRecipe(selectedRecipe));
	}, [selectedRecipe]);

	const handleEditRecipe = () => {
		dispatch(setOpenEditModal());
	};
	return (
		<div className="p-3 flex flex-col gap-3 pb-20">
			<Button
				passedFunction={() => navigate(-1)}
				outline={false}
				text="Back to all receipes"
				extraClasses="text-sm w-[150px] border-[1px] rounded-full hover:shadow-lg ease-in duration-200"
			/>
			{openEditRecipeModal && (
				<Modal form={<EditRecipeForm />} title={"Edit Recipe"} />
			)}
			{selectedUserRecipe?.img && (
				<div className="flex justify-center">
					<img
						src={selectedUserRecipe.img}
						alt={selectedUserRecipe.recipe_name}
						className="rounded-xl  w-[300px] h-[300px] object-cover"
					/>
				</div>
			)}
			<PageTitle title={selectedUserRecipe?.recipe_name} center={true} />
			<div>
				<Button
					text="Edit"
					icon={<FaEdit />}
					outline={true}
					passedFunction={() => handleEditRecipe()}
				/>
				<Button
					text="Delete"
					icon={<FaTrash />}
					outline={true}
					passedFunction={() => console.log("clicked")}
				/>
			</div>
			<p>{selectedUserRecipe?.source}</p>
			<div>
				<SectionTitle title={"Ingredients"} />
				<ul className="pl-5">
					{selectedUserRecipe?.ingredients.map(
						(ingredient, index: number) => (
							<RecipeIngredient
								data={ingredient}
								textSm={false}
								listStyle="none"
								allowLineThrough={true}
								key={index}
							/>
						)
					)}
				</ul>
			</div>
			<div>
				<SectionTitle title={"Instructions"} />
				<ol className="pl-10">
					{selectedUserRecipe?.instructions.map((instruction) => (
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

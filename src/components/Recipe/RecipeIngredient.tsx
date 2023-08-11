import { IngredientsProps } from "../../util/interfaces";

interface RecipeIngredientProps {
	data: IngredientsProps;
}

const RecipeIngredient = ({ data }: RecipeIngredientProps): JSX.Element => {
	const {
		ingredient_amount,
		ingredient_directions,
		ingredient_measurement,
		ingredient_name,
	} = data;
	return (
		<p className="text-sm">
			{ingredient_amount && ingredient_amount}{" "}
			{ingredient_measurement && ingredient_measurement}{" "}
			<span className="font-bold">{ingredient_name}</span>
			{ingredient_directions && (
				<>
					{", "}
					{data.ingredient_directions}
				</>
			)}
		</p>
	);
};

export default RecipeIngredient;

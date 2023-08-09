interface IngredientProps {
	data: {
		ingredient_name: string;
		ingredient_amount: string | null;
		ingredient_measurement: string | null;
		ingredient_directions: string | null;
		ingredient_total: string;
		ingredient_category: string | null;
	};
}
const RecipeIngredient = ({ data }: IngredientProps): JSX.Element => {
	return (
		<p className="text-sm">
			{data.ingredient_amount && data.ingredient_amount}{" "}
			{data.ingredient_measurement && data.ingredient_measurement}{" "}
			<span className="font-bold">{data.ingredient_name}</span>
			{data.ingredient_directions && (
				<>
					{", "}
					{data.ingredient_directions}
				</>
			)}
		</p>
	);
};

export default RecipeIngredient;

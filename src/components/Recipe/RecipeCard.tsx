import { formatRecipeName } from "../../util/functions";

interface RecipeCardProps {
	data: RecipeData;
	column: boolean;
}

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

const RecipeCard = ({ data, column }: RecipeCardProps) => {
	const columnClasses = column ? "flex gap-3" : "flex flex-col";
	const imageColumnClasses = column ? "w-14 h-14 rounded-xl" : "";

	return (
		<div className={`${columnClasses}`}>
			{data.img && (
				<img src={data.img} className={`${imageColumnClasses}`} />
			)}
			<div>
				<h1>{formatRecipeName(data.recipe_name, 32)}</h1>
				<p>{data.category}</p>
			</div>
		</div>
	);
};

export default RecipeCard;

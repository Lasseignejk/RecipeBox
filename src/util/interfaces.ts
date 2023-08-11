export interface RecipeProps {
	[key: string]:
		| string
		| undefined
		| string[]
		| IngredientsProps[]
		| InstructionsProps[];
	recipe_name: string;
	prep_time: string;
	cook_time: string;
	total_time: string;
	servings: string;
	category?: string;
	source?: string;
	img?: string;
	tags: string[];
	ingredients: IngredientsProps[];
	instructions: InstructionsProps[];
	notes: string;
}

export interface InstructionsProps {
	step: number;
	instruction: string;
}

export interface IngredientsProps {
	ingredient_name: string;
	ingredient_amount?: string;
	ingredient_measurement?: string;
	ingredient_directions?: string;
	ingredient_total?: string;
	ingredient_category?: string;
}

export interface FieldsData {
	id: number;
	type: string;
	label: boolean;
	labelText?: string;
	value: string;
}

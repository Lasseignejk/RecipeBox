interface FieldsData {
	type: string;
	label: boolean;
	labelText?: string;
	value: string;
}

export const newRecipeFields: FieldsData[] = [
	{
		type: "text",
		label: true,
		labelText: "Recipe Name",
		value: "recipe_name",
	},
	{
		type: "text",
		label: true,
		labelText: "Prep Time",
		value: "prep_time",
	},
	{
		type: "text",
		label: true,
		labelText: "Cook Time",
		value: "cook_time",
	},
	{
		type: "text",
		label: true,
		labelText: "Total Time",
		value: "total_time",
	},
	{
		type: "text",
		label: true,
		labelText: "Servings",
		value: "servings",
	},
	{
		type: "text",
		label: true,
		labelText: "Category",
		value: "category",
	},
	{
		type: "text",
		label: true,
		labelText: "Source",
		value: "source",
	},
];

export const newRecipeHeaders = [
	"Ingredient",
	"Amount",
	"Measurement",
	"Directions",
];

export const newRecipeIngredientsFields: FieldsData[] = [
	{
		type: "text",
		label: false,
		value: "ingredient_name",
	},
	{
		type: "text",
		label: false,
		value: "ingredient_name",
	},
];

import { FieldsData } from "./interfaces";

export const newRecipeFields: FieldsData[] = [
	{
		id: 1,
		type: "text",
		label: true,
		labelText: "Recipe Name",
		value: "recipe_name",
	},
	{
		id: 2,
		type: "text",
		label: true,
		labelText: "Prep Time",
		value: "prep_time",
	},
	{
		id: 3,
		type: "text",
		label: true,
		labelText: "Cook Time",
		value: "cook_time",
	},
	{
		id: 4,
		type: "text",
		label: true,
		labelText: "Total Time",
		value: "total_time",
	},
	{
		id: 5,
		type: "text",
		label: true,
		labelText: "Servings",
		value: "servings",
	},
	{
		id: 6,
		type: "text",
		label: true,
		labelText: "Category",
		value: "category",
	},
	{
		id: 7,
		type: "text",
		label: true,
		labelText: "Source",
		value: "source",
	},
];

export const newRecipeHeaders = [
	"Amount",
	"Measurement",
	"Ingredient",
	"Directions",
];

export const newRecipeIngredientsFields: FieldsData[] = [
	{
		id: 1,
		type: "text",
		label: false,
		value: "ingredient_amount",
	},
	{
		id: 2,
		type: "text",
		label: false,
		value: "ingredient_measurement",
	},
	{
		id: 3,
		type: "text",
		label: false,
		value: "ingredient_name",
	},
	{
		id: 4,
		type: "text",
		label: false,
		value: "ingredient_directions",
	},
];

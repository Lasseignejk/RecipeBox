interface FieldsData {
	type: string;
	label: boolean;
	labelText: string;
	value: string;
}

export const newRecipeFields: FieldsData[] = [
	{
		type: "text",
		label: true,
		labelText: "Recipe Name",
		value: "recipe_name",
	},
];

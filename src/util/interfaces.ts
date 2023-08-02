export interface formStateVariableProps {
	[key: string]: string | undefined | string[] | IngredientsProps[];
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
}

export interface IngredientsProps {
	ingredient_name: string;
	ingredient_amount: string;
	ingredient_measurement: string;
	ingredient_directions: string;
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

export interface FormProps {
	fields: FieldsData[];
	formStateFunction: (obj: formStateVariableProps) => void;
	formStateVariable: formStateVariableProps;
	table?: boolean;
	headers?: string[];
}

interface IngredientsData {
	ingredient_name: string;
	ingredient_amount: string | null;
	ingredient_measurement: string | null;
	ingredient_directions: string | null;
	ingredient_total: string;
	ingredient_category: string | null;
}

export const formatDateNum = (dateNum: string): string => {
	if (dateNum[0] == "0") {
		return dateNum[1];
	}
	return dateNum;
};

export const formatRecipeName = (
	recipeName: string,
	maxLength: number
): string => {
	if (recipeName.length <= maxLength) {
		return recipeName;
	}
	const indexToCut = recipeName.indexOf(" ", maxLength - 1);
	if (indexToCut != -1) {
		const newName = recipeName.slice(0, indexToCut);
		return newName + "...";
	} else {
		const indexToCut = recipeName.lastIndexOf(" ", maxLength - 1);
		const newName = recipeName.slice(0, indexToCut);
		return newName + "...";
	}
};

export const formatTime = (recipeTime: number): string => {
	if (recipeTime < 60) {
		return recipeTime + " min";
	} else {
		const hours = Math.trunc(recipeTime / 60);
		const min = recipeTime % 60;
		const hourWord = hours == 1 ? " hr" : " hrs";
		const checkMin = min != 0 ? ` ${min} min` : "";
		return hours + hourWord + checkMin;
	}
};

// export const isNumericalString = (str: string) => {
// 	const pattern = /^[0-9]+$/;
// 	return pattern.test(str);
// };

// export const formatIngredients = (ingredients: string) => {
// 	let formattedIngredients = [];
// 	let splitIngredients = ingredients.split("\n");
// 	const measurements = [
// 		"tsp",
// 		"tbsp",
// 		"dozen",
// 		"can",
// 		"liter",
// 		"cup",
// 		"oz",
// 		"gram",
// 		"lb",
// 		"ml",
// 		"cans",
// 		"grams",
// 	];
// 	splitIngredients.map((ingredient) => {
// 		let ingredient_measurement = null;
// 		let ingredient_amount = null;
// 		let ingredient_directions = null;
// 		let ingredient_name = null;

// 		if (!isNumericalString(ingredient[0])) {
// 			ingredient_name = ingredient;
// 		}

// 		if (ingredient.includes(",")) {
// 			const indexToSlice = ingredient.indexOf(",");
// 			ingredient_directions = ingredient.slice(indexToSlice);
// 		}

// 		const splitIngredient = ingredient.split(" ");
// 		splitIngredient.map((part) => {
// 			if (measurements.includes(part)) {
// 				ingredient_measurement = part;
// 			}
// 			if (isNumericalString(part)) {
// 				ingredient_amount = part;
// 			}
// 		});

// 		formattedIngredients.push({
// 			recipe_total: ingredient,
// 			ingredient_measurement: ingredient_measurement,
// 			ingredient_amount: ingredient_amount,
// 			ingredient_directions: ingredient_directions,
// 			ingredient_name: ingredient_name,
// 		});
// 	});

// 	console.log(formattedIngredients);
// };

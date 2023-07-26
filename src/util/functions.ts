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

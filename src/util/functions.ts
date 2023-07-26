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

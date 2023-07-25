export const formatDateNum = (dateNum: string): string => {
	if (dateNum[0] == "0") {
		return dateNum[1];
	}
	return dateNum;
};

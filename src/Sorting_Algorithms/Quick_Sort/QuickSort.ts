const swap = (array: number[], firstItem: number, secondItem: number) => {
	[array[firstItem], array[secondItem]] = [array[secondItem], array[firstItem]];
};

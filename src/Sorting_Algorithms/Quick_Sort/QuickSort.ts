interface IPivotHeperProps {
	array: number[];
	startIndex?: number;
	endIndex?: number;
}

const swap = (array: number[], firstItem: number, secondItem: number) => {
	[array[firstItem], array[secondItem]] = [array[secondItem], array[firstItem]];
};

const pivotPointHelper = (props: IPivotHeperProps) => {
	const { array, startIndex = 0, endIndex = array.length } = props;

	const pivot = array[startIndex];
	let indexOfPivot = startIndex;

	for (let i = startIndex + 1; i <= endIndex; i++) {
		if (array[i] < pivot) {
			indexOfPivot += 1;
			swap(array, i, indexOfPivot);
		}
	}
	swap(array, startIndex, indexOfPivot);

	return indexOfPivot;
};

console.log(pivotPointHelper({ array: [4, 8, 2, 1, 5, 7, 6, 3] }));

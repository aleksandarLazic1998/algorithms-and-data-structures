interface IQuickSortProps {
	array: number[];
	startIndex?: number;
	endIndex?: number;
}

const swap = (array: number[], firstItem: number, secondItem: number) => {
	[array[firstItem], array[secondItem]] = [array[secondItem], array[firstItem]];
};

const pivotPointHelper = (props: IQuickSortProps) => {
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

const quickSort = (props: IQuickSortProps) => {
	const { array, startIndex: left = 0, endIndex: right = array.length } = props;

	if (left < right) {
		let indexOfPivotPoint = pivotPointHelper({
			array,
			startIndex: left,
			endIndex: right,
		});

		quickSort({ array, startIndex: indexOfPivotPoint + 1, endIndex: right });
		quickSort({ array, startIndex: left, endIndex: indexOfPivotPoint - 1 });
	}

	return array;
};

console.log(quickSort({ array: [4, 8, 2, 1, 5, 7, 6, 3] }));

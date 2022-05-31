const merge = (leftArray: number[], rightArray: number[], array: number[]) => {
	let i = 0;
	let j = 0;
	let k = 0;

	while (i < leftArray.length && j < rightArray.length) {
		if (leftArray[i] <= rightArray[j]) {
			array[k] = leftArray[i];
			i++;
		} else if (rightArray[j] <= leftArray[i]) {
			array[k] = rightArray[j];
			j++;
		}
		k++;
	}

	// When some of two array exaust loop through other and merge it
	if (i < leftArray.length) {
		array[k] = leftArray[i];
		i++;
		k++;
	}

	if (j < rightArray.length) {
		array[k] = rightArray[j];
		j++;
		k++;
	}
};

const mergeSort = (array: number[]) => {
	// Base recursion case
	if (array.length < 2) return;

	let middlePoint = array.length / 2;

	let leftArray = [];
	let rightArray = [];

	// It was done with this style to respect vanilla JavaScript
	// this can be done shorter with array.slice(0, middlePoint)
	for (let i = 0; i < middlePoint; i++) {
		leftArray[i] = array[i];
	}

	// this can be don shorter with array.slice(middlePoint)
	for (let j = middlePoint; j < array.length; j++) {
		rightArray[j - middlePoint] = array[j];
	}

	// Recursively split array until it have only one element per side
	mergeSort(leftArray);
	mergeSort(rightArray);
	// Add merge logic
	merge(leftArray, rightArray, array);

	return array;
};

const sortedArray = mergeSort([2, 4, 1, 6, 8, 5, 3, 7]);

console.log(sortedArray);

const binarySearch = (array: number[], value: number) => {
	if (array.length < 1) return -1;

	let i = 0;
	let j = array.length;
	while (i <= j) {
		let middlePoint = Math.floor((i + j) / 2);

		if (array[middlePoint] === value) return middlePoint;
		if (array[middlePoint] < value) i = middlePoint + 1;
		else j = middlePoint - 1;

		middlePoint = Math.floor((i + j) / 2);
	}
};

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28));

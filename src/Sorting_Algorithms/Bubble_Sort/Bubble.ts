class BubbleSort {
	constructor(public arrayOfNumbers: number[]) {
		this.arrayOfNumbers = arrayOfNumbers;
	}

	get sortArray() {
		return this.arrayOfNumbers;
	}
}

const bubble = new BubbleSort([2, 4, 5, 1, 7, 9, 2]);

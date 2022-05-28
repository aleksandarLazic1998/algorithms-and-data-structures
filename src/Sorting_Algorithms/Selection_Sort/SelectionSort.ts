import { swapIndexes } from "../../Helpers/sortSwap";

export class SelectionSort {
	constructor(public arrayOfNumbers: number[]) {
		this.arrayOfNumbers = arrayOfNumbers;
	}

	get sortArray() {
		for (let i = 0; i < this.arrayOfNumbers.length; i++) {
			let temporaryMinValue = i;
			for (let j = i + 1; j < this.arrayOfNumbers.length; j++) {
				if (this.arrayOfNumbers[j] < this.arrayOfNumbers[temporaryMinValue]) {
					temporaryMinValue = j;
				}

				if (j === this.arrayOfNumbers.length - 1) {
					swapIndexes(this.arrayOfNumbers, temporaryMinValue, i);
				}
			}
		}

		return this.arrayOfNumbers;
	}
}

const selection = new SelectionSort([2, 4, 5, 1, 7, 9, 2]);

console.log(selection.sortArray);

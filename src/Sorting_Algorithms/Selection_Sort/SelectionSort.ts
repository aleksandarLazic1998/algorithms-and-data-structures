import { swapIndexes } from "../../Helpers/sortSwap";

export class SelectionSort {
	constructor(public arrayOfNumbers: number[]) {
		this.arrayOfNumbers = arrayOfNumbers;
	}

	get sortArray() {
		const arrayOfItems = this.arrayOfNumbers;

		for (let i = 0; i < arrayOfItems.length; i++) {
			let temporaryMinValue = 0;
			for (let j = i + 1; j < arrayOfItems.length; j++) {
				if (arrayOfItems[temporaryMinValue] > arrayOfItems[j]) {
					temporaryMinValue = j;
				}

				if (j === arrayOfItems.length - 1) {
					swapIndexes(arrayOfItems, temporaryMinValue, i);
				}
			}
		}

		return this.arrayOfNumbers;
	}
}

const selection = new SelectionSort([2, 4, 5, 1, 7, 9, 2]);

console.log(selection.sortArray);

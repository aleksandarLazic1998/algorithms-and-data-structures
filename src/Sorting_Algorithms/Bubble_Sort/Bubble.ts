import { swapIndexes } from "../../Helpers/sortSwap";

class BubbleSort {
	constructor(public arrayOfNumbers: number[]) {
		this.arrayOfNumbers = arrayOfNumbers;
	}

	get sortArray() {
		for (let i = 0; i < this.arrayOfNumbers.length; i++) {
			let isSwapped = false;
			for (let j = 0; j < this.arrayOfNumbers.length; j++) {
				if (this.arrayOfNumbers[j] > this.arrayOfNumbers[j + 1]) {
					swapIndexes(this.arrayOfNumbers, j, j + 1);
					isSwapped = true;
				}
			}
			if (!isSwapped) break;
		}

		return this.arrayOfNumbers;
	}
}

const bubble = new BubbleSort([2, 4, 5, 1, 7, 9, 2]);

console.log(bubble.sortArray);

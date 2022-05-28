import { swapIndexes } from "../../Helpers/sortSwap";

export class SelectionSort {
	constructor(public arrayOfNumbers: number[]) {
		this.arrayOfNumbers = arrayOfNumbers;
	}

	get sortArray() {
		return this.arrayOfNumbers;
	}
}

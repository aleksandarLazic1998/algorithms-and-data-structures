export class InsertionSort {
	constructor(public array: number[]) {
		this.array = array;
	}

	get sort() {
		for (let i = 1; i < this.array.length; i++) {
			let firstUnsortedValue = this.array[i];
			let indexOfHole = i;

			while (
				indexOfHole > 0 &&
				this.array[indexOfHole - 1] > firstUnsortedValue
			) {
				this.array[indexOfHole] = this.array[indexOfHole - 1];
				indexOfHole = indexOfHole - 1;
			}
			this.array[indexOfHole] = firstUnsortedValue;
		}

		return this.array;
	}
}

const insertionSort = new InsertionSort([7, 2, 4, 1, 5, 3]);
console.log(insertionSort.sort);

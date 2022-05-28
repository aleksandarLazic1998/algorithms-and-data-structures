export class SortSwap {
	public array: number[];
	public indexOfFirstItem: number;
	public indexOfSecondItem: number;
	private temp: number = 0;
	constructor(
		array: number[],
		indexOfFirstItem: number,
		indexOfSecondItem: number
	) {
		this.array = array;
		this.indexOfFirstItem = indexOfFirstItem;
		this.indexOfSecondItem = indexOfSecondItem;
	}

	swap() {
		this.temp = this.array[this.indexOfFirstItem];
		this.array[this.indexOfFirstItem] = this.array[this.indexOfSecondItem];
		this.array[this.indexOfSecondItem] = this.array[this.temp];
	}
}

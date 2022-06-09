class ListNode {
	// this.next can be of any primary or object type so it is decided in this special cas eto be unknown
	public next: unknown;
	constructor(public value: number) {
		this.value = value;
		this.next = null;
	}
}

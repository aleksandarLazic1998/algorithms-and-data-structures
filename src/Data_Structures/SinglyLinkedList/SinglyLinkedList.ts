interface INode {
	value: unknown;
	next: unknown | null;
}

class ListNode {
	// this.next can be of any primary or object type so it is decided in this special cas eto be unknown
	public next: unknown | null;
	constructor(public value: unknown) {
		this.value = value;
		this.next = null;
	}
}

class SignlyLinkedList {
	public length: number;
	public head: INode | null;
	public tail: INode | null;
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
}

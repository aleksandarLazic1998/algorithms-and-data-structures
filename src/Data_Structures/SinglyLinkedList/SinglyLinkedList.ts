interface INode {
	value: unknown;
	next: unknown | null;
}

class ListNode {
	// this.next can be of any primary or object type so it is decided in this special case to be unknown
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

	push(value: number) {
		let newNode = new ListNode(value);

		const listHasNoLength = this.length === 0;
		if (listHasNoLength) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			if (this.tail) this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}
}

const list = new SignlyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

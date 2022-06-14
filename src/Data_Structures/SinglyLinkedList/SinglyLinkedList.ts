interface INode {
	value: unknown;
	next: any;
}

class ListNode {
	// this.next can be of any primary or object type so it is decided in this special case to be any
	public next: any;
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

	push(value: unknown) {
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

	pop() {
		const listHasNoLength = this.length === 0;
		if (listHasNoLength) return undefined;

		let currentLastItem = this.head;
		let currentSecondLastItem = currentLastItem;

		while (currentLastItem && currentLastItem.next) {
			currentSecondLastItem = currentLastItem;
			currentLastItem = currentLastItem.next;
		}

		this.tail = currentSecondLastItem;
		if (this.tail) this.tail.next = null;
		this.length -= 1;
		if (listHasNoLength) {
			this.head = null;
			this.tail = null;
		}

		return currentLastItem;
	}

	shift() {
		if (this.length === 0) return undefined;
		else {
			const currentHead = this.head;
			this.head = currentHead?.next;
			this.length -= 1;
		}
		return this;
	}

	unshift(value: unknown) {
		const newNode = new ListNode(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			const currentHead = this.head;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length += 1;

		return this;
	}

	get(index: number) {
		if (index < 0 || index >= this.length) return undefined;

		let currentNode = this.head;
		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode?.next;
		}

		return currentNode;
	}

	insert(value: unknown, index: number) {
		if (index < 0) return undefined;
		if (index === this.length) this.push(value);
		if (index === 0) this.unshift(value);

		const newNode = new ListNode(value);
		let previousNode = this.get(index - 1);
		const nextNode = previousNode?.next;

		if (previousNode) {
			newNode.next = nextNode;
			previousNode.next = newNode;
		}

		this.length += 1;
		return this;
	}

	set(value: unknown, index: number) {
		if (index < 0 || index > this.length) return false;
		const foundNode = this.get(index);
		if (foundNode) foundNode.value = value;
		return true;
	}

	remove(index: number) {
		if (index < 0) return false;
		if (index === this.length) this.pop();
		if (index === 0) this.shift();

		const previousNode = this.get(index - 1);
		const nextNode = this.get(index)?.next;
		if (previousNode) previousNode.next = nextNode;

		return true;
	}
}

const list = new SignlyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.set("Aleksandar", 2);
list.remove(3);

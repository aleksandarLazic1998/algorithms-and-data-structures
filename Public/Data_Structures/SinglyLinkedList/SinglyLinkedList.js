"use strict";
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var SignlyLinkedList = /** @class */ (function () {
    function SignlyLinkedList() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    SignlyLinkedList.prototype.push = function (value) {
        var newNode = new ListNode(value);
        var listHasNoLength = this.length === 0;
        if (listHasNoLength) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail)
                this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    SignlyLinkedList.prototype.pop = function () {
        var listHasNoLength = this.length === 0;
        if (listHasNoLength)
            return undefined;
        var currentLastItem = this.head;
        var currentSecondLastItem = currentLastItem;
        while (currentLastItem && currentLastItem.next) {
            currentSecondLastItem = currentLastItem;
            currentLastItem = currentLastItem.next;
        }
        this.tail = currentSecondLastItem;
        if (this.tail)
            this.tail.next = null;
        this.length -= 1;
        if (listHasNoLength) {
            this.head = null;
            this.tail = null;
        }
        return currentLastItem;
    };
    return SignlyLinkedList;
}());
var list = new SignlyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();
console.log(list);

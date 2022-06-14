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
    SignlyLinkedList.prototype.shift = function () {
        if (this.length === 0)
            return undefined;
        else {
            var currentHead = this.head;
            this.head = currentHead === null || currentHead === void 0 ? void 0 : currentHead.next;
            this.length -= 1;
        }
        return this;
    };
    SignlyLinkedList.prototype.unshift = function (value) {
        var newNode = new ListNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            var currentHead = this.head;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    };
    SignlyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length)
            return undefined;
        var currentNode = this.head;
        for (var i = 0; i < index - 1; i++) {
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
        }
        return currentNode;
    };
    return SignlyLinkedList;
}());
var list = new SignlyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
/*
    // set(value,index)
    // insert
    // remove
    // reverse
*/

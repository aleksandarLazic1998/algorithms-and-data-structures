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
    SignlyLinkedList.prototype.insert = function (value, index) {
        if (index < 0)
            return undefined;
        if (index === this.length)
            this.push(value);
        if (index === 0)
            this.unshift(value);
        var newNode = new ListNode(value);
        var previousNode = this.get(index - 1);
        var nextNode = previousNode === null || previousNode === void 0 ? void 0 : previousNode.next;
        if (previousNode) {
            newNode.next = nextNode;
            previousNode.next = newNode;
        }
        this.length += 1;
        return this;
    };
    SignlyLinkedList.prototype.set = function (value, index) {
        if (index < 0 || index > this.length)
            return false;
        var foundNode = this.get(index);
        if (foundNode)
            foundNode.value = value;
        return true;
    };
    SignlyLinkedList.prototype.remove = function (index) {
        var _a;
        if (index < 0)
            return false;
        if (index === this.length)
            this.pop();
        if (index === 0)
            this.shift();
        var previousNode = this.get(index - 1);
        var nextNode = (_a = this.get(index)) === null || _a === void 0 ? void 0 : _a.next;
        if (previousNode)
            previousNode.next = nextNode;
        return true;
    };
    return SignlyLinkedList;
}());
var list = new SignlyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.set("Aleksandar", 2);
list.remove(3);

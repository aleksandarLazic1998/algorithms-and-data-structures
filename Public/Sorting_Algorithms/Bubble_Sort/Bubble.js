"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sortSwap_1 = require("../../Helpers/sortSwap");
var BubbleSort = /** @class */ (function () {
    function BubbleSort(arrayOfNumbers) {
        this.arrayOfNumbers = arrayOfNumbers;
        this.arrayOfNumbers = arrayOfNumbers;
    }
    Object.defineProperty(BubbleSort.prototype, "sortArray", {
        get: function () {
            for (var i = 0; i < this.arrayOfNumbers.length; i++) {
                var isSwapped = false;
                for (var j = 0; j < this.arrayOfNumbers.length; j++) {
                    if (this.arrayOfNumbers[j] > this.arrayOfNumbers[j + 1]) {
                        (0, sortSwap_1.swapIndexes)(this.arrayOfNumbers, j, j + 1);
                        isSwapped = true;
                    }
                }
                if (!isSwapped)
                    break;
            }
            return this.arrayOfNumbers;
        },
        enumerable: false,
        configurable: true
    });
    return BubbleSort;
}());
var bubble = new BubbleSort([2, 4, 5, 1, 7, 9, 2]);
console.log(bubble.sortArray);

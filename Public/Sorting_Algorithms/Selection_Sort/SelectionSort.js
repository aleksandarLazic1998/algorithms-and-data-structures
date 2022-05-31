"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionSort = void 0;
var sortSwap_1 = require("../../Helpers/sortSwap");
var SelectionSort = /** @class */ (function () {
    function SelectionSort(arrayOfNumbers) {
        this.arrayOfNumbers = arrayOfNumbers;
        this.arrayOfNumbers = arrayOfNumbers;
    }
    Object.defineProperty(SelectionSort.prototype, "sortArray", {
        get: function () {
            for (var i = 0; i < this.arrayOfNumbers.length; i++) {
                var temporaryMinValue = i;
                for (var j = i + 1; j < this.arrayOfNumbers.length; j++) {
                    if (this.arrayOfNumbers[j] < this.arrayOfNumbers[temporaryMinValue]) {
                        temporaryMinValue = j;
                    }
                    if (j === this.arrayOfNumbers.length - 1) {
                        (0, sortSwap_1.swapIndexes)(this.arrayOfNumbers, temporaryMinValue, i);
                    }
                }
            }
            return this.arrayOfNumbers;
        },
        enumerable: false,
        configurable: true
    });
    return SelectionSort;
}());
exports.SelectionSort = SelectionSort;
var selection = new SelectionSort([2, 4, 5, 1, 7, 9, 2]);
console.log(selection.sortArray);

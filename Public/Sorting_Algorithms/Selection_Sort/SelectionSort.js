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
            var arrayOfItems = this.arrayOfNumbers;
            for (var i = 0; i < arrayOfItems.length; i++) {
                var temporaryMinValue = 0;
                for (var j = i + 1; j < arrayOfItems.length; j++) {
                    if (arrayOfItems[temporaryMinValue] > arrayOfItems[j]) {
                        temporaryMinValue = j;
                    }
                    if (j === arrayOfItems.length - 1) {
                        (0, sortSwap_1.swapIndexes)(arrayOfItems, temporaryMinValue, i);
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

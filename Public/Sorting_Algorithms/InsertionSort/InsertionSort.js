"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertionSort = void 0;
var InsertionSort = /** @class */ (function () {
    function InsertionSort(array) {
        this.array = array;
        this.array = array;
    }
    Object.defineProperty(InsertionSort.prototype, "sort", {
        get: function () {
            for (var i = 1; i < this.array.length; i++) {
                var firstUnsortedValue = this.array[i];
                var indexOfHole = i;
                while (indexOfHole > 0 &&
                    this.array[indexOfHole - 1] > firstUnsortedValue) {
                    this.array[indexOfHole] = this.array[indexOfHole - 1];
                    indexOfHole = indexOfHole - 1;
                }
                this.array[indexOfHole] = firstUnsortedValue;
            }
            return this.array;
        },
        enumerable: false,
        configurable: true
    });
    return InsertionSort;
}());
exports.InsertionSort = InsertionSort;
var insertionSort = new InsertionSort([7, 2, 4, 1, 5, 3]);
console.log(insertionSort.sort);

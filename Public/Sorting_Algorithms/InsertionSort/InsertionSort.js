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
                // Set the value of first unsorted item in array
                var firstUnsortedValue = this.array[i];
                // Set the index of value to be swapped
                var indexOfHole = i;
                // If index of hole bigger then 0 and,
                // value of item before first item of unsorted array is bigger than value of first unsorted item in array
                while (indexOfHole > 0 &&
                    this.array[indexOfHole - 1] > firstUnsortedValue) {
                    // Set value of item to be swapped with item of index -1
                    this.array[indexOfHole] = this.array[indexOfHole - 1];
                    // Set the index of item to be index - 1
                    indexOfHole = indexOfHole - 1;
                }
                // Set the value of i to be next unsorted value
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

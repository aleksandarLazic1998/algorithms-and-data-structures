"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapIndexes = void 0;
var swapIndexes = function (array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};
exports.swapIndexes = swapIndexes;

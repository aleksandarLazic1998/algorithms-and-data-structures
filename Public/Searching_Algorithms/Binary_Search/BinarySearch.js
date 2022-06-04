"use strict";
var binarySearch = function (array, value) {
    if (array.length < 1)
        return -1;
    var i = 0;
    var j = array.length;
    while (i <= j) {
        var middlePoint = Math.floor((i + j) / 2);
        if (array[middlePoint] === value)
            return middlePoint;
        if (array[middlePoint] < value)
            i = middlePoint + 1;
        else
            j = middlePoint - 1;
        middlePoint = Math.floor((i + j) / 2);
    }
};
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28));

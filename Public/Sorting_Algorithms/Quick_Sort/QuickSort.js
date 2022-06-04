"use strict";
var swap = function (array, firstItem, secondItem) {
    var _a;
    _a = [array[secondItem], array[firstItem]], array[firstItem] = _a[0], array[secondItem] = _a[1];
};
var pivotPointHelper = function (props) {
    var array = props.array, _a = props.startIndex, startIndex = _a === void 0 ? 0 : _a, _b = props.endIndex, endIndex = _b === void 0 ? array.length : _b;
    var pivot = array[startIndex];
    var indexOfPivot = startIndex;
    for (var i = startIndex + 1; i <= endIndex; i++) {
        if (array[i] < pivot) {
            indexOfPivot += 1;
            swap(array, i, indexOfPivot);
        }
    }
    swap(array, startIndex, indexOfPivot);
    return indexOfPivot;
};
var quickSort = function (props) {
    var array = props.array, _a = props.startIndex, left = _a === void 0 ? 0 : _a, _b = props.endIndex, right = _b === void 0 ? array.length : _b;
    if (left < right) {
        var indexOfPivotPoint = pivotPointHelper({
            array: array,
            startIndex: left,
            endIndex: right,
        });
        quickSort({ array: array, startIndex: indexOfPivotPoint + 1, endIndex: right });
        quickSort({ array: array, startIndex: left, endIndex: indexOfPivotPoint - 1 });
    }
    return array;
};
console.log(quickSort({ array: [4, 8, 2, 1, 5, 7, 6, 3] }));

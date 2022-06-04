"use strict";
var swap = function (array, firstItem, secondItem) {
    var _a;
    _a = [array[secondItem], array[firstItem]], array[firstItem] = _a[0], array[secondItem] = _a[1];
};

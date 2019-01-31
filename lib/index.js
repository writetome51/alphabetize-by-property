"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotString_1 = require("basic-data-handling/errorIfNotString");
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
// This function coerces the values into strings before doing the comparison.
function alphabetizeByProperty(property, objects) {
    errorIfNotString_1.errorIfNotString(property);
    errorIfNotArray_1.errorIfNotArray(objects);
    objects.sort(function (a, b) {
        // decides if a or b comes first.
        return String(a[property]).localeCompare(String(b[property]), 'en', { caseFirst: 'upper' });
    });
}
exports.alphabetizeByProperty = alphabetizeByProperty;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var get_property_1 = require("@writetome51/get-property");
// Modifies the order of `objects`.
// This function coerces the values into strings before doing the comparison.
// `property` is a string that can contain dot-notation.
function alphabetizeByProperty(property, objects) {
    errorIfNotArray_1.errorIfNotArray(objects);
    if (objects.length < 2)
        return;
    objects.sort(function (a, b) {
        var aProp = get_property_1.getProperty(property, a); // allows dot-notation.
        var bProp = get_property_1.getProperty(property, b); // allows dot-notation.
        // decides if a or b comes first.
        return String(aProp).localeCompare(String(bProp), 'en', { caseFirst: 'upper' });
    });
}
exports.alphabetizeByProperty = alphabetizeByProperty;

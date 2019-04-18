import { errorIfNotArray } from 'error-if-not-array';
import { getProperty } from '@writetome51/get-property';

// Modifies the order of `objects`.
// This function coerces the values into strings before doing the comparison.
// `property` is a string that can contain dot-notation.

export function alphabetizeByProperty(property, objects): void {
	errorIfNotArray(objects);
	if (objects.length < 2) return;
	
	objects.sort((a, b) => {
		let aProp = getProperty(property, a);  // allows dot-notation.
		let bProp = getProperty(property, b); // allows dot-notation.
		// decides if a or b comes first.
		return String(aProp).localeCompare(String(bProp), 'en', {caseFirst: 'upper'});
	});
}

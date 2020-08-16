import {errorIfNotArray} from 'error-if-not-array';
import {getProperty} from '@writetome51/get-property';


// Modifies the order of `objects`.
// This function coerces the values into strings before doing the comparison.
// `property` is a string that can contain dot-notation.

export function alphabetizeByProperty(property, objects) {
	errorIfNotArray(objects);
	if (objects.length < 2) return;

	objects.sort((a, b) => {
		let aProp = getProperty(property, a);
		let bProp = getProperty(property, b);
		
		// decides if a or b comes first.
		return (String(aProp) < String(bProp) ? -1 : 1);
	});
}

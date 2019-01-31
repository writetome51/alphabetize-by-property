import {errorIfNotString, errorIfNotArray} from 'basic-data-handling';


// This function coerces the values into strings before doing the comparison.

export function alphabetizeByProperty(property, objects): void {
	errorIfNotString(property);
	errorIfNotArray(objects);
	objects.sort((a, b) => {
		// decides if a or b comes first.
		return String(a[property]).localeCompare(String(b[property]), 'en', {caseFirst: 'upper'});
	});
}

# alphabetizeByProperty( property: string,  objects: object[] ): void

It re-orders objects alphabetically by property.  
It coerces each property value into a string before doing the sorting.  
The values of the properties are not modifed.


To include in your project:

// If using TypeScript:
import {alphabetizeByProperty} from '@writetome51/alphabetize-by-property';
// If using ES5 JavaScript:
var alphabetizeByProperty = 
	require('@writetome51/alphabetize-by-property').alphabetizeByProperty;

## Example
```
let roster = [
	{name: 'Rod Carmichael', group: 'D'},
	{name: 'Todd Garfunkel', group: 'B'},
	{name: 'Rachel Green', group: 'E'},
	{name: 'Mick Jagger', group: 'A'},
	{name: 'Charlie Brown', group: 'D'},
	{name: 'Flip Mavunkel', group: 'C'},
];

alphabetizeByProperty('group', roster);

/************
roster is now
[
	{name: 'Mick Jagger', group: 'A'},
	{name: 'Todd Garfunkel', group: 'B'},
	{name: 'Flip Mavunkel', group: 'C'},
	{name: 'Charlie Brown', group: 'D'},
	{name: 'Rod Carmichael', group: 'D'},
	{name: 'Rachel Green', group: 'E'}
]

************/
```
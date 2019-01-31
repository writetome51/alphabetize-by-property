# alphabetizeByProperty()
## alphabetizeByProperty(property, objects): void

It re-orders objects alphabetically by property.  
It coerces each property value into a string before doing the sorting.  
The values of the properties are not modifed.


To include in your project:
```
// If using TypeScript:
import {alphabetizeByProperty} from '@writetome51/alphabetize-by-property';
// If using ES5 JavaScript:
var alphabetizeByProperty = 
	require('@writetome51/alphabetize-by-property').alphabetizeByProperty;
```
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
	{name: 'Rod Carmichael', group: 'D'},
	{name: 'Charlie Brown', group: 'D'},
	{name: 'Rachel Green', group: 'E'}
]
************/

// What about alphabetizing characters with diacriticals?

roster =  [
	{name: 'Rod Carmichael', group: 'Ò'},
	{name: 'Todd Garfunkel', group: 'Í'},
	{name: 'Rachel Green', group: 'I'},
	{name: 'Mick Jagger', group: 'Å'},
	{name: 'Charlie Brown', group: 'O'},
	{name: 'Flip Mavunkel', group: 'A'},
];

alphabetizeByProperty('group', roster);

/************
roster is now
[
    { name: 'Flip Mavunkel', group: 'A' },
    { name: 'Mick Jagger', group: 'Å' },
    { name: 'Rachel Green', group: 'I' },
    { name: 'Todd Garfunkel', group: 'Í' },
    { name: 'Charlie Brown', group: 'O' },
    { name: 'Rod Carmichael', group: 'Ò' } 
]
************/

// What if some of the objects don't have a value for that property,
// or the property is missing?

roster =  [
	{name: 'Rod Carmichael', group: undefined},
	{name: 'Mick Jagger', group: 'Å'},
	{name: 'Charlie Brown', group: 'ZZZ'},
	{name: 'Farley Brown', group: 'Z'},
	{name: 'Rachel Green'},
	{name: 'Charlie Brown', group: null},
	{name: 'Todd Garfunkel', group: undefined},
	{name: 'Flip Mavunkel', group: 'A'},
];

alphabetizeByProperty('group', roster);

/************
roster is now
[
    { name: 'Flip Mavunkel', group: 'A' },
    { name: 'Mick Jagger', group: 'Å' },
    { name: 'Charlie Brown', group: null }, // null is treated as a string
    { name: 'Rod Carmichael', group: undefined }, // undefined is treated as a string
    { name: 'Rachel Green' }, // missing property is treated as 'undefined'
    { name: 'Todd Garfunkel', group: undefined },
    { name: 'Farley Brown', group: 'Z' },
    { name: 'Charlie Brown', group: 'ZZZ' } 
]
************/
```

# alphabetizeByProperty(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;property: string,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects<br>): void

Re-orders `objects` alphabetically by `property`.  
It coerces the value of each `object[property]` in `objects` into a string before  
doing the sorting.  The values of the properties are not modifed.  

Note:  `property` is a string that can include dot-notation  
( 'property.subproperty.subsubproperty') .  
Note:  `property` does not have to be an object key.  It can also be an array index.  
To refer to array indexes, here you need to use dot-notation and not  
square braces.  Example: `'1.0' instead of [1][0]`

## Examples
```js
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


roster = [
	{player: {name: 'Rod'}},
	{player: {name: 'Mick'}},
	{player: {name: 'Charlie'}},
	{player: {name: 'Todd'}},
	{player: {name: 'Flip'}},
	{player: {name: 'Rachel'}},
	{player: {name: 'Monica'}},
];

alphabetizeByProperty('player.name', roster);

/************
roster is now
[ 
    { player: { name: 'Charlie' } },
    { player: { name: 'Flip' } },
    { player: { name: 'Mick' } },
    { player: { name: 'Monica' } },
    { player: { name: 'Rachel' } },
    { player: { name: 'Rod' } },
    { player: { name: 'Todd' } }
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


// Now alphabetize by array index.
// Here we alphabetize by each person's last name,
// which is index 1 of index 1:

let people = [
	['teacher', ['thomas', 'stoppard']],
	['pastor', ['terry', 'blank']],
	['priest', ['sam', 'martin']],
	['mayor', ['amy', 'thomas']],
	['teacher', ['cathy', 'nguyen']],
	['minister', ['ng', 'leung']]
];

alphabetizeByProperty('1.1', people);

/************
people is now
[
	['pastor', ['terry', 'blank']],
	['minister', ['ng', 'leung']],
	['priest', ['sam', 'martin']],
	['teacher', ['cathy', 'nguyen']],
	['teacher', ['thomas', 'stoppard']],
	['mayor', ['amy', 'thomas']]
]
************/
```

## Installation
```bash
npm i @writetome51/alphabetize-by-property
```
## Loading
```js
import {alphabetizeByProperty} from '@writetome51/alphabetize-by-property';
```

import { alphabetizeByProperty } from './index';

let roster: any[] = [
	{name: 'Rod Carmichael', group: 'D'},
	{name: 'Todd Garfunkel', group: 'B'},
	{name: 'Rachel Green', group: 'E'},
	{name: 'Mick Jagger', group: 'A'},
	{name: 'Charlie Brown', group: 'D'},
	{name: 'Flip Mavunkel', group: 'C'},
];

alphabetizeByProperty('group', roster);

console.log(roster);
console.log('');


roster =  [
	{name: 'Rod Carmichael', group: 'Ò'},
	{name: 'Todd Garfunkel', group: 'Í'},
	{name: 'Rachel Green', group: 'I'},
	{name: 'Mick Jagger', group: 'Å'},
	{name: 'Charlie Brown', group: 'O'},
	{name: 'Flip Mavunkel', group: 'A'},
];

alphabetizeByProperty('group', roster);

console.log(roster);
console.log('');


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

console.log(roster);
console.log('');

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
console.log(roster);


// test errors
alphabetizeByProperty('', [1,2]);
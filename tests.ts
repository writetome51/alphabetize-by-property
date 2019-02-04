import { alphabetizeByProperty } from './index';
import { getArrayFromProperty } from '@writetome51/get-array-from-property';
import { arraysMatch } from '@writetome51/arrays-match';


let roster: any[] = [
	{name: 'Rod Carmichael', group: 'D'},
	{name: 'Todd Garfunkel', group: 'B'},
	{name: 'Rachel Green', group: 'E'},
	{name: 'Mick Jagger', group: 'A'},
	{name: 'Charlie Brown', group: 'D'},
	{name: 'Flip Mavunkel', group: 'C'}
];

alphabetizeByProperty('group', roster);
let result = getArrayFromProperty('group', roster);
if (arraysMatch(result, ['A', 'B', 'C', 'D', 'D', 'E'])) console.log('test 1 passed');
else console.log('test 1 FAILED');



roster = [
	{name: 'Rod Carmichael', group: 'Ò'},
	{name: 'Todd Garfunkel', group: 'Í'},
	{name: 'Rachel Green', group: 'I'},
	{name: 'Mick Jagger', group: 'Å'},
	{name: 'Charlie Brown', group: 'O'},
	{name: 'Flip Mavunkel', group: 'A'},
];

alphabetizeByProperty('group', roster);
result = getArrayFromProperty('group', roster);
if (arraysMatch(result, ['A', 'Å', 'I', 'Í', 'O', 'Ò'])) console.log('test 2 passed');
else console.log('test 2 FAILED');



roster = [
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
result = getArrayFromProperty('group', roster);
if (arraysMatch(result, ['A', 'Å', null, undefined, undefined, undefined, 'Z', 'ZZZ']))
	console.log('test 3 passed');
else console.log('test 3 FAILED');



roster = [
	{player: {name: 'Rod'}},
	{player: {name: 'Charlie'}},
	{player: {name: 'Todd'}},
	{player: {name: 'Flip'}},
	{player: {name: 'Rachel'}},
	{player: {name: 'Monica'}},
	{player: {name: 'Mick'}}
];

alphabetizeByProperty('player.name', roster);
result = getArrayFromProperty('player.name', roster);
if (arraysMatch(result, ['Charlie', 'Flip', 'Mick', 'Monica', 'Rachel', 'Rod', 'Todd']))
	console.log('test 4 passed');
else console.log('test 4 FAILED');



// test errors
let errorTriggered = false;
try{
	alphabetizeByProperty('', roster);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


errorTriggered = false;
try{
	alphabetizeByProperty([], roster);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


errorTriggered = false;
try{
	alphabetizeByProperty('prop', []);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


errorTriggered = false;
try{
	alphabetizeByProperty('prop', [{prop:'a'}]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');


errorTriggered = false;
try{
	alphabetizeByProperty('prop', {});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');
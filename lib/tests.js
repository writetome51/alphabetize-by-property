"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var roster = [
    { name: 'Rod Carmichael', group: 'D' },
    { name: 'Todd Garfunkel', group: 'B' },
    { name: 'Rachel Green', group: 'E' },
    { name: 'Mick Jagger', group: 'A' },
    { name: 'Charlie Brown', group: 'D' },
    { name: 'Flip Mavunkel', group: 'C' },
];
index_1.alphabetizeByProperty('group', roster);
console.log(roster);
console.log('');
roster = [
    { name: 'Rod Carmichael', group: 'Ò' },
    { name: 'Todd Garfunkel', group: 'Í' },
    { name: 'Rachel Green', group: 'I' },
    { name: 'Mick Jagger', group: 'Å' },
    { name: 'Charlie Brown', group: 'O' },
    { name: 'Flip Mavunkel', group: 'A' },
];
index_1.alphabetizeByProperty('group', roster);
console.log(roster);
console.log('');
roster = [
    { name: 'Rod Carmichael', group: undefined },
    { name: 'Mick Jagger', group: 'Å' },
    { name: 'Charlie Brown', group: 'ZZZ' },
    { name: 'Farley Brown', group: 'Z' },
    { name: 'Rachel Green' },
    { name: 'Charlie Brown', group: null },
    { name: 'Todd Garfunkel', group: undefined },
    { name: 'Flip Mavunkel', group: 'A' },
];
index_1.alphabetizeByProperty('group', roster);
console.log(roster);
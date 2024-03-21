// ┏┳┓┏┓┏┓┓┏┓  ┏┓┳┓┏┓
//  ┃ ┣┫┗┓┃┫   ┃┃┃┃┣ •
//  ┻ ┛┗┗┛┛┗┛  ┗┛┛┗┗┛•

// Find out something weird about strings:

// Old-school string formatting functions:
"stringTheory".fontcolor("blue").fontsize(300).blink();

// More backwards compatibility weirdness:
String.prototype.trimLeft.name; // 'trimStart'

// Emoji combinations and weirdness:
const physicists = "👨‍👨‍👧‍👧";
console.log([...physicists]);
const [first] = physicists;
console.log(first.length);

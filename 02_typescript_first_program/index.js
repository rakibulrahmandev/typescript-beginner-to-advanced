var message = 'Hello World!';
console.log(message);
var age = 25;
console.log(age);
var userName = 'Jack David';
console.log(userName);
// userName = 1235; -> not allowed;
// userName = true; -> not allowed;
// userName = null; -> not allowed;
// userName = undefined; -> not allowed;
// userName = "1234"; -> allowed;
// userName = "true"; -> allowed;
// userName = "null"; -> allowed;
// userName = "undefined"; -> allowed;
var str = 'Hello From TypeScript';
console.log(str);
var num = 12345;
console.log(num);
var boolean = true;
console.log(boolean);
var nullish = null;
console.log(nullish);
var undefine = undefined;
console.log(undefine);
function add(num1, num2) {
    return num1 + num2;
}
;
console.log(add(12, 12));
// index.ts -> tsc (typescript compiler) -> index.js -> node index.js

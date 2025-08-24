let message = 'Hello World!';
console.log(message);

let age = 25;
console.log(age);

let userName = 'Jack David';
console.log(userName);

// userName = 1235; -> not allowed;
// userName = true; -> not allowed;
// userName = null; -> not allowed;
// userName = undefined; -> not allowed;

// userName = "1234"; -> allowed;
// userName = "true"; -> allowed;
// userName = "null"; -> allowed;
// userName = "undefined"; -> allowed;

let str: string = 'Hello From TypeScript';
console.log(str);

let num: number = 12345;
console.log(num);

let boolean: boolean = true;
console.log(boolean);

let nullish: null = null;
console.log(nullish);

let undefine: undefined = undefined;
console.log(undefine);


function add(num1: number, num2: number) {
    return num1 + num2;
};

console.log(add(12, 12));

// index.ts -> tsc (typescript compiler) -> index.js -> node index.js
// built in types: number, string, boolean, void, null, undefined, never

// 1. number
let num: number = 102;
let floatNum: number = 0.5;

console.log(num, floatNum);

// 2. string
let str: string = 'Apple';

console.log(str);

// 3. boolean
let bool: boolean = false;

console.log(bool);

// 4. any
let data: any = 'hello';

console.log(data);

// 5. void
function printMsg(): void {
    console.log('Hello World!');
};

printMsg();
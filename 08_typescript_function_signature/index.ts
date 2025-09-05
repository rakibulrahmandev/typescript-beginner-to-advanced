let userOne: () => void;
let userTwo: (name: string) => void;
let userThree: (name: string, age: number) => string;

userOne = () => {
    console.log(`Hello world!`);
};

userTwo = (name: string) => {
    console.log(`Welcome ${name}!`);
};

userThree = (name: string, age: number) => {
    return (`Welcome ${name}! your age is ${age}.`);
};

console.log(userThree('Rakibul Rahman', 18));
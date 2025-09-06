// without interface declare an object:

// here declare object type:
let users: {
    id: number;
    name: string;
    age: number;
}[];

// initialized:
users = [];

// create every object type:
let user1: {
    id: number;
    name: string;
    age: number;
};

let user2: {
    id: number;
    name: string;
    age: number;
};

// object create based on object types:
user1 = {
    id: 1,
    name: 'Rakibul Rahman',
    age: 18
};

user2 = {
    id: 2,
    name: 'Ensiya Rahman',
    age: 15
};

// push each object in the users array of object:
users.push(user1, user2);

// create every single user info printing function:
function printUsers(user: {id: number; name: string; age: number;}): void {
    console.log(`userid: ${user.id}, username: ${user.name}, age: ${user.age}`);
};

// pass every single user from users array:
users.forEach(user => printUsers(user));

// ---------------------------------------------------------------- x ----------------------------------------------------------

// with interface declare an object:

// create user interface:
interface IUser {
    id: number;
    username: string;
    age: number;
};

// userOne array initialized:
let userOne: IUser[];

// initialized:
userOne = [];

// create object based on interface:
let user3: IUser = {
    id: 3,
    username: 'Rakibul Rahman',
    age: 18
};

let user4: IUser = {
    id: 4,
    username: 'Ensiya Rahman',
    age: 15
};

// push each user object in the userOne array:
userOne.push(user3, user4);

// create every single user info printing function:
function printUserInfo(user: IUser): void {
    console.log(`username: ${user.username}, userid: ${user.id}, age: ${user.age}`);
};

// pass every single user from users array:
userOne.forEach(user => printUserInfo(user));
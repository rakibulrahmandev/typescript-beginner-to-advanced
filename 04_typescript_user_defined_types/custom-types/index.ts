type User = {
    username: string;
    userid: number | string;
    isStudent?: boolean;
};

let users: User[];
users = [];

let user1: User;
user1 = {username: 'Rakibul Rahman', userid: 18, isStudent: true};
users.push(user1);

let user2: User;
user2 = {username: 'Ensiya Rahman', userid: 15, isStudent: true};
users.push(user2);

console.log(users);



type RequestType = "GET" | "POST";

let getRequest: RequestType;
getRequest = 'GET';

let postRequest: RequestType;
postRequest = 'POST';

console.log(getRequest);
console.log(postRequest);



type PrintMessage = 'Hello' | 'Hey';

function printMsg(print: PrintMessage): void {
    console.log(print);
};

printMsg('Hello');
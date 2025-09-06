// without create and implementing interface:
class UserOne {
    private fullname: string;
    private age: number;

    constructor(fullname: string, age: number) {
        this.fullname = fullname;
        this.age = age;
    };

    userInfo(): void {
        console.log(`username: ${this.fullname}, age: ${this.age}`);
    };
};

// create user object:
let user = new UserOne('Rakibul Rahman', 18);
user.userInfo();

// with create and implementing interface:
interface IUserInfoPrint {
    userInfoPrint: () => string;
};

class UserTwo implements IUserInfoPrint {
    constructor(private fullname: string, private age: number) {}

    userInfoPrint = () => {
        return `username: ${this.fullname}, age: ${this.age}`;
    };
};

// create user object:
let userTwo = new UserTwo('Ensiya Rahman', 15);
console.log(userTwo.userInfoPrint());

// user implementing:
// Step 1: Define the interface
interface User {
  id: number;
  name: string;
  age: number;
  printInfo(): void;   // method requirement
}

// Step 2: Create a class that implements the interface
class Person implements User {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  // Must implement the method defined in the interface
  printInfo(): void {
    console.log(`userid: ${this.id}, username: ${this.name}, age: ${this.age}`);
  }
}

// Step 3: Use the class
let users: User[] = [];

let user1 = new Person(1, "Rakibul Rahman", 18);
let user2 = new Person(2, "Ensiya Rahman", 15);

users.push(user1, user2);

// Step 4: Call methods
users.forEach(user => user.printInfo());

// without modifier:
class UserFive {
    private fullname: string;
    private age: number;

    constructor(fullname: string, age: number) {
        this.fullname = fullname;
        this.age = age;
    };

    userInfo(): void {
        console.log(`username: ${this.fullname}, age: ${this.age}`);
    };
};

// with modifier:
class UserSix {
    constructor(private fullname: string, private age: number) {}

    userInfoPrint = () => {
        return `username: ${this.fullname}, age: ${this.age}`;
    };
};
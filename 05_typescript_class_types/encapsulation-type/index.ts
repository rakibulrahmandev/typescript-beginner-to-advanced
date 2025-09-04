// public, private, protected, readonly;

class UserOne {
    username: string;
    age: string | number;

    constructor (username: string, age: string | number) {
        this.username = username;
        this.age = age;
    };

    greeting(): void {
        console.log(`Welcome, ${this.username}!`);
    };
};

let user1 = new UserOne('Rakibul Rahman', 18);
user1.greeting();


// public ------------------------------------------------------------>
class UserTwo {
    public username: string;
    age: string | number;

    constructor (username: string, age: string | number) {
        this.username = username;
        this.age = age;
    };

    greeting(): void {
        console.log(`Welcome, ${this.username}!`);
    };
};

let user2 = new UserTwo('Esma Rahman', 15);
user2.username = 'Ensiya Rahman';
user2.greeting();


// private ------------------------------------------------------------>
class UserThree {
    username: string;
    age: string | number;

    constructor (username: string, age: string | number) {
        this.username = username;
        this.age = age;
    };

    greeting(): void {
        console.log(`Welcome, ${this.username}!`);
    };
};

class UserThreeDetails extends UserThree {
    private isMarried: boolean;

    constructor (username: string, age: string | number, isMarried: boolean) {
        super(username, age);
        this.isMarried = isMarried;
    };

    marriedStatus(): void {
        console.log(`${this.username} is married ${this.isMarried ? 'yes!' : 'no!'}`);
    };
};

let userThree = new UserThreeDetails('Rakibul Rahman', 18, false);
userThree.marriedStatus();


// protected ---------------------------------------------------------->
class UserFour {
    username: string;
    age: string | number;
    protected salary: number;

    constructor (username: string, age: string | number, salary: number) {
        this.username = username;
        this.age = age;
        this.salary = salary;
    };

    greeting(): void{
        console.log(`Welcome, ${this.username}`);
    };

};

class UserFourDetails extends UserFour {
    country: string;

    constructor (username: string, age: string | number, salary: number, country: string) {
        super(username, age, salary);
        this.country = country;
    };

    greeting(): void {
        console.log(`lives in ${this.country}`);
    };
};

let userFour = new UserFourDetails('Rakibul Rahman', 18, 20000, 'Korea');
userFour.greeting();


// readonly ----------------------------------------------------------->
class UserFive {
    readonly username: string;
    age: string | number;

    constructor(username: string, age: string | number) {
        this.username = username;
        this.age = age;
    };

    greeting(): void {
        console.log(`Welcome, ${this.username}!`);
    };

};

let userFive = new UserFive('Rakibul Rahman', 18);
userFive.greeting();
console.log(userFive.username);

// setter & getter ----------------------------------------------------->
class UserSix {
    username: string;
    age: string | number;

    constructor(username: string, age: string | number) {
        this.username = username;
        this.age = age;
    };

    greeting(): void{
        console.log(`Welcome, ${this.username}`);
    };
};

class UserSixDetails extends UserSix {
    private email: string;

    constructor(username: string, age: string | number, email: string) {
        super(username, age);
        this.email = email;
    };

    setEmail(email: string): void {
        this.email = email;
    };

    getEmail(): string {
        return this.email;
    };
};

let userSix = new UserSixDetails('Ensiya Rahman', 15, 'ensiyarahman@rahman.com');
userSix.greeting();

userSix.setEmail('ensiyarahman@gmail.com');
console.log(userSix.getEmail());
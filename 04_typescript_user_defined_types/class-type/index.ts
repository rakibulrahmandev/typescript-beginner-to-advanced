class User {
    // properties, constructor, methods

    name: string;
    age: string | number;
    isStudent?: boolean;

    constructor (name: string, age: string | number, isStudent?: boolean) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    };

    greet(): void {
        console.log(`Welcome, ${this.name}!`);
    };
};

let user1 = new User('Rakibul Rahman', 18);
user1.greet();

let user2 = new User('Ensiya Rahman', 15);
user2.greet();
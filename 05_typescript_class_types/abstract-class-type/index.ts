abstract class User {
    username: string;
    age: number | string;

    constructor (username: string, age: number | string) {
        this.username = username;
        this.age = age;
    };

    abstract greet(): void;
};

class Student extends User {
    studentId: number | string;

    constructor (username: string, age: number | string, studentId: number | string) {
        super(username, age);
        this.studentId = studentId;
    };

    greet(): void {
        console.log(`Welcome, ${this.username}! Your student id is ${this.studentId}`);
    };
};

let student1 = new Student('Rakibul Rahman', 18, 10565);
student1.greet();
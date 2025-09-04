class User {
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

class Student extends User {
    studentId: number | string;

    constructor (name: string, age: string | number, studentId: number | string, isStudent?: boolean) {
        super(name, age, isStudent);
        this.studentId = studentId;
    };

    greet(): void {
        console.log(`Welcome, ${this.name}. Your student id is ${this.studentId}`);
    };
};

let student1 = new Student('Rakibul Rahman', 18, 10565, true);
student1.greet();
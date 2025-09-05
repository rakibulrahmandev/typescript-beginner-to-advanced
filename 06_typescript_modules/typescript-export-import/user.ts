export class User {
    username: string;
    age: string | number;
    isStudent?: boolean;

    constructor(username: string, age: string | number, isStudent?: boolean) {
        this.username = username;
        this.age = age;
        this.isStudent = isStudent;
    };

    greeting(): void {
        console.log(`Welcome, ${this.username}`);
    };
};

export class UserDetails extends User {
    protected country: string;
    protected city: string;

    constructor(username: string, age: string | number, country: string, city: string, isStudent?: boolean) {
        super(username, age, isStudent);
        this.country = country;
        this.city = city;
    };

    greeting(): void {
        console.log(`Welcome, ${this.username}! ${this.isStudent ? 'Your are a student' : ''}. Your from ${this.city}, ${this.country}`);
    };

    setCountry(country: string): void {
        this.country = country;
    };

    setCity(city: string): void {
        this.city = city;
    };

    getCountry(country: string): any {
        return country;
    };

    getCity(city: string): any {
        return city
    };
};
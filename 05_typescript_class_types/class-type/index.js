var User = /** @class */ (function () {
    function User(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    ;
    User.prototype.greet = function () {
        console.log("Welcome, ".concat(this.name, "!"));
    };
    ;
    return User;
}());
;
var user1 = new User('Rakibul Rahman', 18);
user1.greet();
var user2 = new User('Ensiya Rahman', 15);
user2.greet();

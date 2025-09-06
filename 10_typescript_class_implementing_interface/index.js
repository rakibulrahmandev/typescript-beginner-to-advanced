// without create and implementing interface:
var UserOne = /** @class */ (function () {
    function UserOne(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
    ;
    UserOne.prototype.userInfo = function () {
        console.log("username: ".concat(this.fullname, ", age: ").concat(this.age));
    };
    ;
    return UserOne;
}());
;
// create user object:
var user = new UserOne('Rakibul Rahman', 18);
user.userInfo();
;
var UserTwo = /** @class */ (function () {
    function UserTwo(fullname, age) {
        var _this = this;
        this.fullname = fullname;
        this.age = age;
        this.userInfoPrint = function () {
            return "username: ".concat(_this.fullname, ", age: ").concat(_this.age);
        };
    }
    return UserTwo;
}());
;
// create user object:
var userTwo = new UserTwo('Ensiya Rahman', 15);
console.log(userTwo.userInfoPrint());
// Step 2: Create a class that implements the interface
var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    // Must implement the method defined in the interface
    Person.prototype.printInfo = function () {
        console.log("userid: ".concat(this.id, ", username: ").concat(this.name, ", age: ").concat(this.age));
    };
    return Person;
}());
// Step 3: Use the class
var users = [];
var user1 = new Person(1, "Rakibul Rahman", 18);
var user2 = new Person(2, "Ensiya Rahman", 15);
users.push(user1, user2);
// Step 4: Call methods
users.forEach(function (user) { return user.printInfo(); });
// without modifier:
var UserFive = /** @class */ (function () {
    function UserFive(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
    ;
    UserFive.prototype.userInfo = function () {
        console.log("username: ".concat(this.fullname, ", age: ").concat(this.age));
    };
    ;
    return UserFive;
}());
;
// with modifier:
var UserSix = /** @class */ (function () {
    function UserSix(fullname, age) {
        var _this = this;
        this.fullname = fullname;
        this.age = age;
        this.userInfoPrint = function () {
            return "username: ".concat(_this.fullname, ", age: ").concat(_this.age);
        };
    }
    return UserSix;
}());
;

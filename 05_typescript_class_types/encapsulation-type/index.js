// public, private, protected, readonly;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserOne = /** @class */ (function () {
    function UserOne(username, age) {
        this.username = username;
        this.age = age;
    }
    ;
    UserOne.prototype.greeting = function () {
        console.log("Welcome, ".concat(this.username, "!"));
    };
    ;
    return UserOne;
}());
;
var user1 = new UserOne('Rakibul Rahman', 18);
user1.greeting();
// public ------------------------------------------------------------>
var UserTwo = /** @class */ (function () {
    function UserTwo(username, age) {
        this.username = username;
        this.age = age;
    }
    ;
    UserTwo.prototype.greeting = function () {
        console.log("Welcome, ".concat(this.username, "!"));
    };
    ;
    return UserTwo;
}());
;
var user2 = new UserTwo('Esma Rahman', 15);
user2.username = 'Ensiya Rahman';
user2.greeting();
// private ------------------------------------------------------------>
var UserThree = /** @class */ (function () {
    function UserThree(username, age) {
        this.username = username;
        this.age = age;
    }
    ;
    UserThree.prototype.greeting = function () {
        console.log("Welcome, ".concat(this.username, "!"));
    };
    ;
    return UserThree;
}());
;
var UserThreeDetails = /** @class */ (function (_super) {
    __extends(UserThreeDetails, _super);
    function UserThreeDetails(username, age, isMarried) {
        var _this = _super.call(this, username, age) || this;
        _this.isMarried = isMarried;
        return _this;
    }
    ;
    UserThreeDetails.prototype.marriedStatus = function () {
        console.log("".concat(this.username, " is married ").concat(this.isMarried ? 'yes!' : 'no!'));
    };
    ;
    return UserThreeDetails;
}(UserThree));
;
var userThree = new UserThreeDetails('Rakibul Rahman', 18, false);
userThree.marriedStatus();
// protected ---------------------------------------------------------->
var UserFour = /** @class */ (function () {
    function UserFour(username, age, salary) {
        this.username = username;
        this.age = age;
        this.salary = salary;
    }
    ;
    UserFour.prototype.greeting = function () {
        console.log("Welcome, ".concat(this.username));
    };
    ;
    return UserFour;
}());
;
var UserFourDetails = /** @class */ (function (_super) {
    __extends(UserFourDetails, _super);
    function UserFourDetails(username, age, salary, country) {
        var _this = _super.call(this, username, age, salary) || this;
        _this.country = country;
        return _this;
    }
    ;
    UserFourDetails.prototype.greeting = function () {
        console.log("lives in ".concat(this.country));
    };
    ;
    return UserFourDetails;
}(UserFour));
;
var userFour = new UserFourDetails('Rakibul Rahman', 18, 20000, 'Korea');
userFour.greeting();
// readonly ----------------------------------------------------------->
var UserFive = /** @class */ (function () {
    function UserFive(username, age) {
        this.username = username;
        this.age = age;
    }
    ;
    UserFive.prototype.greeting = function () {
        console.log("Welcome, ".concat(this.username, "!"));
    };
    ;
    return UserFive;
}());
;
var userFive = new UserFive('Rakibul Rahman', 18);
userFive.greeting();
console.log(userFive.username);
// setter & getter ----------------------------------------------------->
var UserSix = /** @class */ (function () {
    function UserSix(username, age) {
        this.username = username;
        this.age = age;
    }
    ;
    UserSix.prototype.greeting = function () {
        console.log("Welcome, ".concat(this.username));
    };
    ;
    return UserSix;
}());
;
var UserSixDetails = /** @class */ (function (_super) {
    __extends(UserSixDetails, _super);
    function UserSixDetails(username, age, email) {
        var _this = _super.call(this, username, age) || this;
        _this.email = email;
        return _this;
    }
    ;
    UserSixDetails.prototype.setEmail = function (email) {
        this.email = email;
    };
    ;
    UserSixDetails.prototype.getEmail = function () {
        return this.email;
    };
    ;
    return UserSixDetails;
}(UserSix));
;
var userSix = new UserSixDetails('Ensiya Rahman', 15, 'ensiyarahman@rahman.com');
userSix.greeting();
userSix.setEmail('ensiyarahman@gmail.com');
console.log(userSix.getEmail());

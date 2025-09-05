"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetails = exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, age, isStudent) {
        this.username = username;
        this.age = age;
        this.isStudent = isStudent;
    }
    ;
    User.prototype.greeting = function () {
        console.log("Welcome, ".concat(this.username));
    };
    ;
    return User;
}());
exports.User = User;
;
var UserDetails = /** @class */ (function (_super) {
    __extends(UserDetails, _super);
    function UserDetails(username, age, country, city, isStudent) {
        var _this = _super.call(this, username, age, isStudent) || this;
        _this.country = country;
        _this.city = city;
        return _this;
    }
    ;
    UserDetails.prototype.greeting = function () {
        console.log("Welcome, ".concat(this.username, "! ").concat(this.isStudent ? 'Your are a student' : '', ". Your from ").concat(this.city, ", ").concat(this.country));
    };
    ;
    UserDetails.prototype.setCountry = function (country) {
        this.country = country;
    };
    ;
    UserDetails.prototype.setCity = function (city) {
        this.city = city;
    };
    ;
    UserDetails.prototype.getCountry = function (country) {
        return country;
    };
    ;
    UserDetails.prototype.getCity = function (city) {
        return city;
    };
    ;
    return UserDetails;
}(User));
exports.UserDetails = UserDetails;
;

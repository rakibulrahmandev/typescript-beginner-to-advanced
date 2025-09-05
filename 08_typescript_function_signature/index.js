var userOne;
var userTwo;
var userThree;
userOne = function () {
    console.log("Hello world!");
};
userTwo = function (name) {
    console.log("Welcome ".concat(name, "!"));
};
userThree = function (name, age) {
    return ("Welcome ".concat(name, "! your age is ").concat(age, "."));
};
console.log(userThree('Rakibul Rahman', 18));

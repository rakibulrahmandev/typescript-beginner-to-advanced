// without interface declare an object:
// here declare object type:
var users;
// initialized:
users = [];
// create every object type:
var user1;
var user2;
// object create based on object types:
user1 = {
    id: 1,
    name: 'Rakibul Rahman',
    age: 18
};
user2 = {
    id: 2,
    name: 'Ensiya Rahman',
    age: 15
};
// push each object in the users array of object:
users.push(user1, user2);
// create every single user info printing function:
function printUsers(user) {
    console.log("userid: ".concat(user.id, ", username: ").concat(user.name, ", age: ").concat(user.age));
}
;
// pass every single user from users array:
users.forEach(function (user) { return printUsers(user); });
;
// userOne array initialized:
var userOne;
// initialized:
userOne = [];
// create object based on interface:
var user3 = {
    id: 3,
    username: 'Rakibul Rahman',
    age: 18
};
var user4 = {
    id: 4,
    username: 'Ensiya Rahman',
    age: 15
};
// push each user object in the userOne array:
userOne.push(user3, user4);
// create every single user info printing function:
function printUserInfo(user) {
    console.log("username: ".concat(user.username, ", userid: ").concat(user.id, ", age: ").concat(user.age));
}
;
// pass every single user from users array:
userOne.forEach(function (user) { return printUserInfo(user); });

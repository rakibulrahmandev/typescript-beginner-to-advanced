import { User, UserDetails } from "./user";
import { User as user, UserDetails as userDetails } from "./user";

let userOne = new User('Rakibul Rahman', 18, true);
userOne.greeting();

let userTwo = new UserDetails('Rakibul Rahman', 18, 'Bangladesh', 'Dhaka', true);
userTwo.greeting();

let userThree = new user('Ensiya Rahman', 15, true);
userThree.greeting();

let userFour = new userDetails('Ensiya Rahman', 15, 'Russia', 'Moscow', true);
userFour.greeting();
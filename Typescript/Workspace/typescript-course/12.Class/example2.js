// //With class so we dont need to update each value in each and every object
// var User = /** @class */ (function () {
//     function User(fname, lname, age, email) {
//         this.firstName = fname;
//         this.lastName = lname;
//         this.age = age;
//         this.email = email;
//     }
//     User.prototype.greet = function () {
//         return ("Hello ".concat(this.firstName, " ").concat(this.lastName));
//     };
//     User.prototype.getAgeandEmail = function () {
//         return ("Age : ".concat(this.age, " & Email : ").concat(this.email));
//     };
//     return User;
// }());
// //Creating instance using new keyword
// var user1 = new User("Arshad", "Zakir", 19, "arshad@gmail.com");
// console.log(user1.greet());
// console.log(user1.getAgeandEmail());

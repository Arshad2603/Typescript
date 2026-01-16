//without inheritance
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return ("Hello Welcome ".concat(this.firstName, " ").concat(this.lastName));
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName, age, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }
    Admin.prototype.greet = function () {
        return ("Hello Welcome ".concat(this.firstName, " ").concat(this.lastName, "; Role : ").concat(this.role));
    };
    Admin.prototype.getAge = function () {
        return this.age;
    };
    Admin.prototype.manageUsers = function () {
        return "Managing users with role ".concat(this.role);
    };
    return Admin;
}());
var user1 = new User("John", "Doe", 25);
var admin1 = new Admin("Arshad", "Zakir", 20, "Adminstrator");
console.log(user1.greet());
console.log(user1.getAge());
console.log(admin1.greet());
console.log(admin1.getAge());
console.log(admin1.manageUsers());

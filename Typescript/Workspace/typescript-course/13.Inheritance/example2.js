//with inheritance to neglect code duplications
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return ("Hello Welcome ".concat(this.firstName, " ").concat(this.lastName));
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
// the function in the parent class is also added in the Person Class
//adding the Person class in the User Class using extend keyword and calling the constructor of the parent class using super("same arguments as in the parent constructor")
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this; //calling constructor from the parent Class
    }
    return User;
}(Person));
//When we need to add new properties to the child class declare and intiliase as it is
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
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
}(Person));
var u1 = new Admin("Arshad", "Zakir", 20, "Administrator");
console.log(u1.greet());
console.log(u1.manageUsers());
console.log(u1.getAge());

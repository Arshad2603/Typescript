//with class modifiers.
//public and private = class access modifiers
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    //getterMethods
    user.prototype.getName = function () {
        return this.name;
    };
    //getterMethods
    user.prototype.getAge = function () {
        return this.age;
    };
    //setterMethods
    user.prototype.setName = function (name) {
        this.name = name;
    };
    user.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
    };
    return user;
}());
var user1 = new user("Alice", 30);
console.log(user1.getName());
console.log(user1.getAge());
//Modifying the user1 values using settermethods public
user1.setName("John");
user1.setAge(-10);
console.log(user1.getName());
console.log(user1.getAge());

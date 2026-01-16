var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.totalUser++;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.gettotalUsers = function () {
        return User.totalUser;
    };
    //Static property which can be accessed directly from the class no need to access using instance.
    User.totalUser = 0;
    return User;
}());
var u1 = new User("Alice");
var user2 = new User("Bob");
console.log(u1.getName());
console.log(user2.getName());
console.log(User.gettotalUsers());

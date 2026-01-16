var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
function CreateUser(name) {
    var totalUsers = 0;
    totalUsers++;
    return new User(name);
}
var u1 = CreateUser("Alice");
var user2 = CreateUser("Bob");
console.log(u1.getName());
console.log(user2.getName());
console.log(totalUsers);

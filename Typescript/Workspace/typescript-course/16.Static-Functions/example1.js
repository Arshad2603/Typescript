var user1 = /** @class */ (function () {
    function user1(name, age) {
        this.name = name;
        this.age = age;
    }
    user1.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return user1;
}());
var u2 = new user1("Alice", 25);
console.log(u2.isAdult());

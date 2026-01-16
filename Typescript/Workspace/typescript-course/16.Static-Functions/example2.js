//To call the function directly from the class we are converting into static function
var user1 = /** @class */ (function () {
    function user1(name, age) {
        this.name = name;
        this.age = age;
    }
    user1.isAdult = function (age) {
        return age >= 18;
    };
    return user1;
}());
var u2 = new user1("Alice", 25);
console.log(user1.isAdult(25));

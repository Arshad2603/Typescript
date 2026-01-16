//age and middleName are optional properties because user2 is arguments of greetUser we dont need any age or middleName properties for that.
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    console.log("User Details: ".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName, ", Age: ").concat(user.age));
}
var user1 = {
    firstName: "John",
    lastName: "Doe",
    middleName: "M",
    age: 30
};
var user2 = {
    firstName: "Jane",
    lastName: "Doe"
};
console.log(greetUser(user2));
logUserDetails(user2);

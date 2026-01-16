//Special Declaration = Decorator
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        console.log("Calling add method with arguments ".concat(a, " and ").concat(b));
        var result = a + b;
        console.log("Result: ".concat(result));
        return result;
    };
    Calculator.prototype.subtract = function (a, b) {
        console.log("Calling subtract method with arguments".concat(a, " and ").concat(b));
        var result = a - b;
        console.log("Result: ".concat(result));
        return result;
    };
    return Calculator;
}());
var calculator = new Calculator();
calculator.add(5, 3);
calculator.subtract(7, 3);

//With Closures
function createCounter() {
    var counterValue = 0;
    return {
        increment: function () {
            counterValue++;
        },
        getValue: function () {
            return counterValue;
        },
        multiply: function () {
            return counterValue = counterValue * 4;
        }
    };
}
;
var counter1 = createCounter();
counter1.increment();
counter1.multiply();
console.log(counter1.getValue());

//withoutClosure
var CounterValue = 0;
function incrementCounter() {
    CounterValue++;
}
function getCounterValue() {
    return CounterValue;
}
incrementCounter();
console.log(getCounterValue());
incrementCounter();
console.log(getCounterValue());

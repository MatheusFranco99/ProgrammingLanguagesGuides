
// self invoking function
const someComplexValue = (() => {
    const a = 10;
    const b = 20;
    return b/a;
})();

console.log(someComplexValue);

// Closure: combination with function + referencing to its surrouding state
// they are created every time a function is created, at function creation time

function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    inner()
    inner()
}
outer()
outer()

// output 1,2,1,2

console.log("------")

function outer2() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    return inner // actually, will return the inner function + its scope
}
const fn = outer2()
fn()
fn()

// output 1, 2
// common expected output: 1, 1
// but in js, when we return a function, we return the function definition + the function scope
// so the function has a persistent memory which hold data. This combination of the function and scope chain is a closure in js
/*
block scope: variables declared inside a { } can't be accessed from outside
function scope: same thing
global scope: globally scoped variables can be accessed everywhere
*/

// nested function's scope

let a = 10;

function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a,b,c)
    }
    inner()
    function inner1() {
        let c = 30;
        let b = 40
        console.log(a,b,c)
    }
    inner1()
    function change() {
        b = 50
    }
    console.log("b="+b) // b reamains unchanged
}
outer()

// javascript looks for the variable in the current scope, then it cascades up until global. When it first finds it, gets its value.

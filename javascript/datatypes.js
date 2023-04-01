// Traditional hello world first command
console.log("Hello world")

// This is a line comment
/*
This is a multiline comment
*/


// ================================================================================
//                              Variables
// ================================================================================

console.log("------- > Variables")
let age = 25 // can be left uninitialized, can change value
console.log(age)
const salary = 8000 // needs to be initialized and can't change value
console.log(salary)

/*
There's another way: var. var is similar to let and used to be the standard use until ES6 but it has a problem.
If the a variable name is defined both on global and local scopes, they are, actually, equal. So, it's an easy
way to mistakenly modify global variables. 
*/

/*
let and const defines variables accessible only on the block it's defined.
So, if it's in a condition, function or loop, it'll only be accessible there.
If it's defined globally, it's accessible globally.
*/


// ================================================================================
//                              Data Types
// ================================================================================
console.log("------- > Data types")

/*
Primitive types:
    String, number, boolean, undefined, null, bigint, symbol
Non primitive types:
    Objects
*/

// Single quotes, double and ` are accepted
const myString = 'Vish'
const language = "Javascript"
const channel = `CodeEvolution`

const total = 0
const PI = 3.14

const myBoolean = true

// undefined: value not assigned. E.g.:
let result
let myUndefined = undefined
console.log(result)
console.log(myUndefined)

// null value
let data = null
console.log(data)

// Object
// may have quotes on key or not. Needs a comma on last position.
let person = {
    firstName: 'Bruce',
    'lastName': 'Wayne',
    age: 30,
    // string: any object
}
// but needs to give string as key or with dot
console.log(person['firstName'] + person['lastName'] + person.age)

let oddNumbers = [1,3,5,7,9]
console.log(oddNumbers[0])

/*
Javascript is a dynamically typed language: you don't have to specify and data types can be converted as needed
*/
let a = 0
a = true
a = 'string'
console.log(a)






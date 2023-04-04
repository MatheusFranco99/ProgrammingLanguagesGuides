// ================================================================================
//                              Operators
// ================================================================================

console.log("------- > Operators")

// assigment
let x = 10

// arithmetics
let y = 3

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x--) // happens after command
console.log(--x) // happnens before command
console.log(x++)
console.log(++x)

// comparison
console.log(x == y)
console.log(x != y)
console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x === y) // explained below
console.log(x !== y) // explained below

// logical

console.log(x > 8 && x < 20)
console.log(x < 8 || x > 20)
console.log(!(x === y))

// string operators
// +: join string
console.log("Apple" + " MacOS")


// ternary operation
let isEven = 10 % 2 === 0 ? 'Is even' : 'Is not even'
console.log(isEven)




// ================================================================================
//                              Equality
// ================================================================================

console.log("------- > Equality")

// == tries to convert types and compare. === compare the raw type (don't convert)
// good practice, as beginner, to use triple equals (===)

let v1 = 'test'
let v2 = 'test'

console.log(v1 == v2)
console.log(v1 === v2)


v1 = 10
v2 = '10'

console.log(v1 == v2)
console.log(v1 === v2)


// Note that unexpected things can happen when javascript convert types 

console.log(false == '') // true
console.log(0 == '') // true
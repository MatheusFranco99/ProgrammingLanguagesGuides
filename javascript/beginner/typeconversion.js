// ================================================================================
//                              Type Conversion
// ================================================================================

// Automatic
console.log("------- > Type Conversion: automatic");

// string + number -> string
console.log(2 + "3");

// string + boolean -> string
console.log(true + "3");

// string -(or * or /) string -> tries to convert to number. If can't, become a NaN (not a number)
console.log('4'-'2')
console.log('4a'*2)
console.log('abc'/3)

// boolean -> false treated as 0 and true as 1
console.log(true - '1')
console.log(1/false) // becomes 1/0 which is, in javascript, Infinity

// null is treated as 0
console.log('5' - null)

// undefined is treated as NaN
console.log(1 + undefined)


// Manual
console.log("------- > Type Conversion: manual");

console.log(Number('5'))
console.log(Number(''))
console.log(Number('   '))
console.log(Number(false))
console.log(Number(null))

console.log(parseInt('5'))
console.log(parseInt(''))

console.log(parseFloat('3.14'))

console.log(String(5))
console.log(String(true))
console.log(String(null))
console.log(String(undefined))

console.log((3.14).toString())

// toString don't work on null or undefined

// Boolean: null undefined numeric 0 '' NaN -> false, else it's True
console.log(Boolean(100))
console.log(Boolean(0))
console.log(Boolean(-1.5))
console.log(Boolean('0'))
console.log(Boolean('1'))
console.log(Boolean(''))
console.log(Boolean('  '))
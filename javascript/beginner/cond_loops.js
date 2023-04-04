// ================================================================================
//                              Conditional Statements
// ================================================================================

console.log("------- > Conditional Statements");

let num = 5

if (num > 0) {
    console.log("Bigger than 0")
} else if (num < 0) {
    console.log("Smaller than 0")
} else {
    console.log("Equals to 0")
}

let clr = 'red'

switch (clr) {
    case 'blue':
        console.log("Is blue")
        break
    case 'red':
        console.log("Is red")
        break
    default:
        console.log("Not red neither blue")
}


// ================================================================================
//                              Loops
// ================================================================================

console.log("------- > Loops");

/*
For loop
While loop
Do...while loop
For...of loop
*/

// for loop
for (let i = 1; i <= 3; i ++) {
    console.log("I:"+i)
}

// while loope
let i = 1
while (i <= 3) {
    console.log("I:"+i)
    i += 1
}

// do while loop: always execute once
i = 6
do {
    console.log("I:"+i)
    i++
} while (i <= 5)

// for of loop (like python). Works for list but not for dictionaries
let numArray = [1,2,3]
for (const num of numArray) {
    console.log("Num:" + num)
}
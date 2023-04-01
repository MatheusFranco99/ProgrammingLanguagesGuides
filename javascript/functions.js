// ================================================================================
//                              Functions
// ================================================================================

console.log("------- > Functions");

function greet() {
    console.log("Greet")
}

greet()

function greetPerson(name) {
    console.log("Greet " + name)
}

greetPerson('Ana')

function returnDiffTypes(number) {
    if (number === 0) {
        return true
    }
    return 'Not zero'
}

console.log(returnDiffTypes(0))
console.log(returnDiffTypes(1))


// Arrow functions
const arrowSum = (a,b) => {
    return a + b
}
console.log(arrowSum(1,2))

const arrowSum2 = (a,b) => a + b
console.log(arrowSum2(1,2))
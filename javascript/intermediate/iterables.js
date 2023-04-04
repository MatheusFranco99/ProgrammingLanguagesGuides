

/*
Iterables and iterators
*/

// common case

const str = 'Name'
const arr = ['n','a','m','e']
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i))
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log("========")

// for of

for (const char of str) {
    console.log(char)
}
for (const item of arr) {
    console.log(item)
}
console.log("========")


// 2015: insertion of for of sintax. Created iterable objects (that implement iterable protocol)

const obj = {
    [Symbol.iterator]: function () {
        let step = 0
        const iterator = {
            next: function () {
                step++
                if (step == 1) {
                    return {value:"Hello",done:false}
                } else if (step == 2) {
                    return {value:"World",done:false}
                }
                return {value:undefined,done:true}
            }
        }
        return iterator
    }

}

for (const word of obj) {
    console.log(word)
}
console.log("========")



// Generator: simplify writing iterators

function normalFunction() {
    console.log('Hello')
    console.log('World')
}
normalFunction()
console.log("========")

// generator function can stop and resumo execution
function* generatorFunction() {
    yield 'Hello'
    yield 'World'
}
const generatorObject = generatorFunction() // generatorObject is an iterator
for (const word of generatorObject) {
    console.log(word)
}


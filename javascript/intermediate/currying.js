

// Currying: transform function with multiple args into a sequence of nested functions that take one argument at a time
// e.g. f(a,b,c) -> f(a)(b)(c)
// note: it doesn't call, simply transforms it

function sum(a,b,c) {
    return a + b + c
}

console.log(sum(2,3,5))

// sum(2,3,5) sum(2)(3)(5)

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a,b,c)
            }
        }
    }
}

const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)

// javascript allows you to do currying which can be useful when you want to pre-set an argument

// real world example:
// you want to do logging and you create the function
function log(date, importance, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}


// curry it!
var _ = require('lodash');
log = _.curry(log);

// don't lose anything about log and can easily generate partial functions
let logNow = log(new Date());
logNow("Info","message")
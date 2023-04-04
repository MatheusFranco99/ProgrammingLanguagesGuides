
/*
implicit binding
explicit binding
new binding
default binding
*/

// implicit binding
const person = {
    name: 'John',
    sayMyName: function() {
        console.log(`My name is ${this.name}`)
    }
}

person.sayMyName()
// "this" is the entity on the left when we call the variable/function


// explicit binding
function sayMyName() {
    console.log(`My name is ${this.name}`)
}

sayMyName.call(person)
// every method has a 'call' method to pass the context


// new binding
function Person (name) {
    // it's like there's an object this = {}
    this.name = name;
}

const p1 = new Person('John')
const p2 = new Person('Mary')
// constructive function: new + function -> new object

console.log(p1.name,p2.name)

// default binding
sayMyName()
// output: My name is undefined
// js considers this as the global scope (globalThis) and looks for variables with name "name"

globalThis.name = 'global name'
sayMyName()
// output: My name is global name


/*
order of precedence of 'this':
new binding
explicit binding
implicit binding
default binding
*/

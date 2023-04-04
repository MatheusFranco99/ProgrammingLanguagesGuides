function Person(fName,lName) {
    this.firstName = fName
    this.lastName = lName
}
// new + function -> constructive function
const person1 = new Person('John','Miles')
const person2 = new Person('Marcus','Aurelius')

person1.getFullName = function() {
    return this.firstName + ' ' + this.lastName
} 

console.log(person1.getFullName())

// function restricted to person1


// to extend to all instances: prototype

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName
} 
console.log(person2.getFullName())


// prototypal inheritance

function SuperHero(fName, lName) {
    Person.call(this,fName,lName)
    this.isSuperHero = true
}
SuperHero.prototype = Object.create(Person.prototype)

SuperHero.prototype.fightCrime = function () {
    console.log("Fighting crime")
}
const batman = new SuperHero('Batman','DC')
console.log(batman.getFullName())
batman.fightCrime()
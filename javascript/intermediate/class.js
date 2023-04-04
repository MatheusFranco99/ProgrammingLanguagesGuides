

// Classes are other syntax for prototypes

class Person {
    constructor(fName,lName) {
        this.firstName = fName
        this.lastName = lName
    }
    sayMyName () {
        return this.firstName + " " + this.lastName
    }
}

const p1 = new Person('John','EU')
console.log(p1.sayMyName())

class SuperHero extends Person {
    constructor(fName,lName) {
        super(fName,lName)
        this.isSuperHero = true
    }
    fightCrime() {
        console.log("Fighting crime")
    }
}

const batman = new SuperHero('Bruce','Wayne')
console.log(batman.sayMyName())
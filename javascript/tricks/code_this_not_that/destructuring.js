
const turtle = {
    name: 'bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal:10,
    diet: 'berries'
}

function feed(animal) {
    return `Feed ${animal.name} ${animal.meal}`;
}

function feedDestructuring({name,meal}) {
    return `Feed ${name} ${meal}`
}

function feedDestructuring2(turtle) {
    const {name,meal} = turtle;
    return `Feed ${name} ${meal}`
}

console.log(feed(turtle))
console.log(feedDestructuring(turtle))
console.log(feedDestructuring2(turtle))
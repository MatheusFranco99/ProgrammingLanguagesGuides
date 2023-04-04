const horse = {
    name:'horse name',
    age: 7
}

let bio = horse.name + " with age " + horse.age + "."
console.log(bio)


const {name,age} = horse;
bio = `${name} with age ${age}.`
console.log(bio)

function horseAge(str,age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

// instead of ()
const bio2 = horseAge`This is horse ${horse.age}`;
console.log(bio2)

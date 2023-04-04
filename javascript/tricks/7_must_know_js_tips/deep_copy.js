const person = {
    name: "Dom",
    skills: [
        "programming",
        "cooking"
    ]
};

// deep copy: cascade copying through lists, maps, etc

const personCopy = JSON.parse(JSON.stringify(person))

console.log(personCopy.skills == person.skills)
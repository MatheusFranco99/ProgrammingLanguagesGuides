
const occupations = [
    "Lawyer",
    "Doctor",
    "Programmer",
    "Chef"
];

// find index of element
console.log(occupations.indexOf("Lawyer"))


// good way to find element and iterate with function
const result = occupations.find(o => o.startsWith("C"))

console.log(result)
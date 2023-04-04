

const orders = [500,30,99,15,223];

// bad
let total = 0;
let withTax = [];
let highValue = [];
for (i = 0; i < orders.length; i++) {
    total += orders[i]

    withTax.push(orders[i]*1.1);

    if(orders[i] > 100) {
        highValue.push(orders[i])
    }
}
console.log(total)
console.log(withTax)
console.log(highValue)



// best
const total2 = orders.reduce((acc,cur) => acc + cur); // accumulated value, current value
const withTax2 = orders.map(v => v * 1.1);
const highValue2 = orders.filter(v => v > 100);
console.log(total2)
console.log(withTax2)
console.log(highValue2)

const foo = {name:'tom',age:10}
const bar = {name:'min',age:20}

// bad
console.log(foo)
console.log(bar)

// better: prints variable name
console.log({foo,bar})

// css style
console.log('%c My Friends','color:orange;')
console.log({foo,bar})


// table (same properties)
console.table([foo,bar])

// time
console.time('looper')
let i = 0;
while (i<1000000) {i++}
console.timeEnd('looper')


// stack trace logs
const deleteMe = () => console.trace('trace called')
deleteMe()
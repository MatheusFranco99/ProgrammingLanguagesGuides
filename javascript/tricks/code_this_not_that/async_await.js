
const random = () => {
    return Promise.resolve(Math.random())
}

const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;
    return random()
        .then(v => {
            first = v;
            return random();
        })
        .then(v => {
            second = v;
            return random();
        })
        .then(v => {
            third = v;
            return first + second + third
        })
        .then(v=> {
            console.log(`Result ${v}`)
        })
}

sumRandomAsyncNums()


// easier with async and await
const sumRandomAsyncNums2 = async() => {
    const first = await random();
    const second = await random();
    const third = await random();
    sum = first + second + third
    console.log(`Result ${sum}`)
}
sumRandomAsyncNums2()
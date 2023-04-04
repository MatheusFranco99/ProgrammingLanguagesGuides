
class target {
    constructor() {
        this.distance = 10;
        this.focus = 2;
    }
}

// suppose you want an object from class target,
// because you want to use the distance and focus attributes
// you would do:

function logger(t) {
    if (t instanceof target) {
        console.log(t.distance, t.focus)
    }
}

let t = new target()
logger(t)


// you can accomplish this easier with parameter destructuring:

function logger2({distance,focus}) {
    console.log(distance, focus)
}
logger2(t)
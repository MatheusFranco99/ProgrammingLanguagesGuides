
const pikachu = {name: 'Pikachu'};
const stats = {hp:40, attack:60, defense: 45};

// assign attributes in stats to pikachu
pikachu['hp'] = stats.hp
//...
console.log(pikachu)

// also may modify stats


// OR

const lvl0 = Object.assign(pikachu,stats)
const lvl1 = Object.assign(pikachu,{hp:45})
console.log(lvl0)
console.log(lvl1)

// OR
const lvl0_2 = {...pikachu, ...stats}
const lvl1_2 = {...pikachu, hp:45}
console.log(lvl0_2)
console.log(lvl1_2)



// add elements to array
let pokemon1 = ['Arkbok','Raichu']
pokemon1.push('pikachu')
console.log(pokemon1)

// or
let pokemon = [...pokemon1,'mewtwo','Metapod'] // etc
console.log(pokemon)

// unshift
pokemon = ['mewtwo','Metapod',...pokemon1]
console.log(pokemon)

// put in the middle
pokemon = ['mewtwo',...pokemon1,'Metapod']
console.log(pokemon)

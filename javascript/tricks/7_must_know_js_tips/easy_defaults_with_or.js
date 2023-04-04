function getUsername() {
  return null;
}

let username = getUsername();
if (username === null) {
  username = "dom";
}

console.log(username)

// this is the same as
const username2 = getUsername() || "dom" 
console.log(username2)

// if gets null, undefined, "", 0 -> use the second argument.
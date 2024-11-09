// Jika nama dan owner sama return:
// -> Hello boss
// -> Hello guest

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Daniel", "Daniel"));

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let res = [];
  for (let i = a; i <= b; i++) {
    res.push(i);
  }
  return res;
}

console.log(between(-2, 2));

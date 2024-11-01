// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  let res = n.toString().split("").reverse()
  return res.map(Number)
}

console.log(digitize(35231));


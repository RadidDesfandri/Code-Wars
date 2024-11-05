// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {  
    if (x > 1) {
      z.push(i * x)
    } else {
      z.push(i);
    }
  }
  return z;
}

console.log(countBy(3, 7));

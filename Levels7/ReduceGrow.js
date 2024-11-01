// mencari total dari sebuah array
// sample [1, 2,  3,  4] -> 24

function grow(x) {
  return x.reduce((acc, curr) => acc * curr);
}

console.log(grow([1, 2, 3, 4]));
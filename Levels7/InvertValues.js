// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []


function invert(array) {
  return array.map((num) => {
    if (num === 0) {
      return num;
    }
    return num * -1;
  });
}

console.log(invert([1, 2, 3, -4]));

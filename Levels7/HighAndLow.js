// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers) {
  let num = numbers.split(" ");
  return `${Math.max(...num)} ${Math.min(...num)}`;
}

console.log(highAndLow("-1 2 3 4 5"));

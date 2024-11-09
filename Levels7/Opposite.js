// Jika ada angka merupakan negative jadikan angka tsb positif
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  number = number.toString().split("");
  if (number[0] === "-") {
    number.shift();
  } else {
    number.unshift("-");
  }
  return +number.join("");
}
console.log(opposite(34));


function opposite2(number) {
  return -number;
}
console.log(opposite2(-4));

// 12 --> "10 + 2"
// 45 --> "40 + 2"
// 70304 --> "70000 + 300 + 4"

function expandedForm(num) {
  var multiple = 10;
  var result = [];
  while (num > 1) {
    var remainder = num % multiple;
    if (remainder > 0) {
      result.unshift(remainder);
    }
    num -= remainder;
    multiple = multiple * 10;
  }
  return result.join(" + ");
}
console.log(expandedForm(42));

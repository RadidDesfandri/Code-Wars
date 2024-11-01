// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// If else
function basicOp2(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  }
  if (operation == "-") {
    return value1 - value2;
  }
  if (operation == "*") {
    return value1 * value2;
  }
  if (operation == "/") {
    return value1 / value2;
  }
}

console.log(basicOp2("/", 10, 2));
console.log(basicOp("+", 4, 7));

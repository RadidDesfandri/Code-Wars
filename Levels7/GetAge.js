

function getAge(inputString) {
    return parseInt(inputString)
}

console.log(getAge("7 years old"));


// Bergaya💀💀💀
function getAge2(inputString) {
  inputString = inputString.split(" ").slice(0, 1);
  if (inputString.includes("0")) {
    return parseInt(inputString);
  } else if (inputString.includes("1")) {
    return parseInt(inputString);
  } else if (inputString.includes("2")) {
    return parseInt(inputString);
  } else if (inputString.includes("3")) {
    return parseInt(inputString);
  } else if (inputString.includes("4")) {
    return parseInt(inputString);
  } else if (inputString.includes("5")) {
    return parseInt(inputString);
  } else if (inputString.includes("6")) {
    return parseInt(inputString);
  } else if (inputString.includes("7")) {
    return parseInt(inputString);
  } else if (inputString.includes("8")) {
    return parseInt(inputString);
  } else {
    return parseInt(inputString);
  }
}

console.log(getAge2("9 years old"));

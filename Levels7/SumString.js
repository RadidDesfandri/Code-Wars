

function sumStr(a, b) {
  return +a + +b + "";
}
console.log(sumStr("", ""));

// If else dan mempersulit diri
function sumStr2(a, b) {
  if (a === "" && b === "") {
    return "0";
  } else if (a === "") {
    return b;
  } else if (b === "") {
    return a;
  }
  return `${parseInt(a) + parseInt(b)}`;
}

console.log(sumStr2("34", "5"));

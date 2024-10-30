// check apakah sebuah string memiliki jumlah x dan o yang sama
// return boolean(true or false)

// cara 1
function XO(str) {
  let o = [];
  let x = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x.push(str[i]);
    } else if (str[i].toLowerCase() === "o") {
      o.push(str[i]);
    }
  }
  if (o.length == x.length) {
    return true;
  } else {
    return false;
  }
}

// cara 2
const XO2 = (str) => {
  return (str =
    str.toLowerCase().split("x").length == str.toLowerCase().split("o").length);
};

// cara 3
const XO3 = (str) => {
  str = str.toLowerCase().split();
  return str.filter(item => item == "x").length === str.filter(item => item  == "o").length
};

console.log(XO3("xXoO"));
console.log(XO2("xxoo"));
console.log(XO("ooxx"));

// sample 5, I
// output = IIIII

// cara 1
function repeatStr(n, s) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += s;
  }
  return res;
}

// cara 2
function repeatStr2(n, s) {
  return s.repeat(n);
}


console.log(repeatStr2(3, "SS"));
console.log(repeatStr(5, "I"));

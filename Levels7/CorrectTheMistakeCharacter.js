function correct(string) {
  return string
    .split("")
    .map((c) => {
      return c === "0" ? "O" : c === "1" ? "I" : c === "5" ? "S" : c;
    })
    .join("");
}

console.log(correct("1ND0NE51A"));


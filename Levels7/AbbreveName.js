// Sam Harris => S.H
// patrick feeney => P.F
// mencari huruf pertama dan huruf pertama setelah space

function abbrevName(name) {
  let spl = name.toUpperCase().split(" ");
  return (spl = spl[0].charAt(0) + "." + spl[1].charAt(0));
}

// maping
function abbrevName2(name) {
  return name
    .split(" ")
    .map((e) => e[0].toUpperCase())
    .join(".");
}

console.log(abbrevName2("Sam haris"));
console.log(abbrevName("Sam Haris"));

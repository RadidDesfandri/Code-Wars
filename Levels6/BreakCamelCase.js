// Beri space jika ada huruf besar
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  string = string.split("");
  let res = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === String(string[i].toUpperCase())) {
      res.push(" " + string[i]);
    } else {
      res.push(string[i]);
    }
  }
  return res.join("");
}

console.log(solution("camelCasing"));

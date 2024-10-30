// sample word
// output drow
// reverse

// cara 1
function solution(str) {
  return str.split("").reverse().join("");
}

// cara 2
const solution2 = (str) => str.split("").reverse().join("");

console.log(solution2("word"));
console.log(solution("word"));

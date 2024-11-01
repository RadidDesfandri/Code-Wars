// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let arr = s.split("");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].toUpperCase() + Array(i + 1).join(arr[i].toLowerCase()));
  }
  return res.join("-");
}

console.log(accum("abcd"));

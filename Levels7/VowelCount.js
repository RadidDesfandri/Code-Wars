// menghitung jumlah vokal a,i,u,e,o dalam sebuah string

// looping
function getCount(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("a")) {
      res.push(str[i]);
    } else if (str[i].includes("i")) {
      res.push(str[i]);
    } else if (str[i].includes("u")) {
      res.push(str[i]);
    } else if (str[i].includes("e")) {
      res.push(str[i]);
    } else if (str[i].includes("o")) {
      res.push(str[i]);
    }
  }

  return res.length;
}

// filtering
function getCount2(str) {
  return str.split("").filter((e) => "aiueoAIUEO".includes(e)).length;
}

console.log(getCount2("hello word"));
console.log(getCount("makani bang"));

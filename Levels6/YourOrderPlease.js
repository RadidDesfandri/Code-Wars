// Setiap kata ada sebuah angka angka, urutkan kata tersebut sesuai dengan huruf yang tersedia
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  let arr = words.split(" ");
  let res = [];
  arr.forEach((word) => {
    let str = word.split("");
    let num = str.find((num) => parseInt(num));
    res.push([word, parseInt(num)]);
  });
  res.sort((a, b) => a[1] - b[1]).map((e) => e.splice(1));
  return res.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));

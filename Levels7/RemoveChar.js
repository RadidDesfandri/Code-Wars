// Hapus character pertama dan terakhir dari sebuah string

function removeChar(str) {
  str = str.split("");
  str.shift();
  str.pop();
  return str.join('')
}
console.log(removeChar("eloquent"));

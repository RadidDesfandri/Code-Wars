// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0

function strCount(str, letter) {
  return str.split("").filter((e) => e == letter).length;
}
console.log(strCount("Hello", "l"));

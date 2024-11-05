// Create a method to see whether the string is ALL CAPS.

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

function isUpperCase(string) {
  return string.toString() === string.toUpperCase();
}

console.log(isUpperCase("ACSKLDFJSGSKLDFJSKLDFJ"));


//using prototype
String.prototype.isUpperCase = function () {
  return this.toString() == this.toUpperCase();
};
console.log("c".isUpperCase());

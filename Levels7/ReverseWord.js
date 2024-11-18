// Reverse word
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(" ")
    .map((e) => e.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("This is an example!"));

function reverseWords2(str){
    return str.split("").reverse().join('').split(" ").reverse().join(" ")

}
console.log(reverseWords2("This is an example!"));

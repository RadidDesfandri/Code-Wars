// madam -> madam -> true
// cars -> srac -> false

function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
}

console.log(isPalindrome("Abba"));

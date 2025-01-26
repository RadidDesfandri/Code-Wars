// "This website is for losers LOL!" -> Ths wbst s fr lsrs LL!
// Remove Vowel [a, i, u , e , o]

function disemvowel(str) {
  return str.replace(/[aiueo]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));

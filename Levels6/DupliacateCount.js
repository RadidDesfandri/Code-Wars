// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let res = [];
  text = text.toLowerCase().split("").sort();
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1] && !res.includes(text[i])) {
      res.push(text[i])
    }
  }
  return res.length
}
console.log(duplicateCount(""));

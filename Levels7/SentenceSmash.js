// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  return words.join(' ');
}

console.log(smash(["hello", "world", "this", "is", "great"]));

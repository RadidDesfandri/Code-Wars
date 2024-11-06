//return the total number of smiling faces in the array
//  VALID_EYES = [':', ';']
//  VALID_NOSES = ['-', '~']
//  VALID_MOUTHS = [')', 'D']

function countSmileys(arr) {
  let res = [];
  const smileys = [':)', ':D', ':-)', ':~)', ':-D', ':~D', ';)', ';D', ';-)', ';~)', ';-D', ';~D'];
  for (let i = 0; i < arr.length; i++) {
    if (smileys.includes(arr[i])) {
      res.push(arr);
    }
  }
  return res.length;
}

console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
const inc = ["D", ":)"];
console.log(inc.includes(":)"));


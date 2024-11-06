// Mengurutkan angka ganjil terkecil ke terbesar
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] -> [ 1, 8, 2, 6, 3, 4, 4, 2, 5, 0]

function sortArray(array) {
  const odd = array.filter((e) => e % 2).sort((a, b) => a - b);
  return array.map((e) => (e % 2 ? odd.shift() : e));
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// Looping for
function sortArray2(arr) {
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] % 2 === 0) {
      odd.push(arr[i]);
    }
  }
  odd = odd.sort((a, b) => a - b);
  return arr.map((e) => (e % 2 ? odd.shift() : e));
}

console.log(sortArray2([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

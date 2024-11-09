// Cari rata2 dari sebuah array
// Rumus mencari rata rata = (Jumlah keseluruhan) / jumlah total

function findAverage(array) {
 return array.length == 0 ? 0 : array.reduce((prev, curr) => prev + curr) / array.length
}
console.log(findAverage([1, 2, 3, 4]));

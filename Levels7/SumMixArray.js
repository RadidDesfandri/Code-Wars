// Kembalikan jumlah dari sebuah array, isi array berupa campuran dari string dan int

function sumMix(x) {
  return x.map((e) => parseInt(e)).reduce((prev, curr) => prev + curr);
}
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));

const data = [
  { label: "Yuppi", rating: 4 },
  { label: "Yougurt", rating: 5 },
  { label: "Citato", rating: 5 },
  { label: "Coffe", rating: 5 },
  { label: "A", rating: 4 },
];

const totalRatings =
  data.map((e) => e.rating).reduce((prev, curr) => prev + curr) / data.length;

const hasil = parseFloat(totalRatings.toFixed(1));
console.log(hasil);

// Menghitung jumlah paper yang dibutuhkan

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}
console.log(paperwork(5, 5));

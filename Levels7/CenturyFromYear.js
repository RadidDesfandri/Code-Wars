// Cari jumlah tahun dari abad
// 1 Abad merupakan 1 - 100 tahun, 101 hingga 200 masuk ke abad ketua
// 1705 --> 18

function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(2742));
// Buat fungsi untuk mencari umur ayah dua kali umur anak

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let total = sonYearsOld + sonYearsOld - dadYearsOld;
  total = total.toString().split("");
  if (total[0] == "-") {
    total.shift();
  }
  return +total.join("");
}
console.log(twiceAsOld(29, 0));
